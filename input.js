
// input.js
function addFlightData() {
    const flight = document.getElementById("new-flight").value.trim();
    const type = document.getElementById("new-type").value.trim();

    if (!flight || !type) {
        alert("請輸入航班號碼和機型！");
        return;
    }

    const sections = [
        { name: "頭車", prefix: "head" },
        { name: "中車", prefix: "middle" },
        { name: "尾車", prefix: "tail" }
    ];

    const categories = ["long", "short", "oven", "hand"];
    const categoryNames = ["長車", "短車", "焗爐", "手挽"];

    let newData = [];

    sections.forEach(section => {
        categories.forEach((category, index) => {
            const kitchen = parseInt(document.querySelector(`.${section.prefix}-${category}-kitchen`).value) || 0;
            const bar = parseInt(document.querySelector(`.${section.prefix}-${category}-bar`).value) || 0;
            const elderly = parseInt(document.querySelector(`.${section.prefix}-${category}-elderly`).value) || 0;
            const water = parseInt(document.querySelector(`.${section.prefix}-${category}-water`).value) || 0;
            const total = parseInt(document.querySelector(`.${section.prefix}-${category}-total`).value) || 0;

            if (kitchen + bar + elderly + water !== total) {
                alert(`請確保 ${section.name} ${categoryNames[index]} 的總數等於各項之和！`);
                return;
            }

            newData.push([
                flight,
                type,
                section.name,
                categoryNames[index],
                { kitchen, bar, elderly, water, total }
            ]);
        });
    });

    // 確保所有檢查都通過後才新增
    if (newData.length === sections.length * categories.length) {
        flightDataArray.push(...newData);

        // 自動上傳到 GitHub
        const updatedArrayString = "let flightDataArray = " + JSON.stringify(flightDataArray, null, 2) + ";";
        const token = prompt("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"); // 安全起見，應改進為安全輸入
        if (token) {
            fetch(`https://api.github.com/repos/<你的用戶名>/<你的儲存庫名稱>/contents/data.js`, {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: "更新航班資料",
                    content: btoa(unescape(encodeURIComponent(updatedArrayString))), // 將字串轉為 Base64
                    sha: "<原始 data.js 的 SHA，需先獲取>" // 需先用 GET 請求獲取
                })
            })
            .then(response => response.json())
            .then(data => {
                alert("資料已成功上傳至 GitHub！");
            })
            .catch(error => {
                alert("上傳失敗，請檢查 Token 或網路連線：" + error);
            });
        }

        // 清空輸入欄位
        document.getElementById("new-flight").value = "";
        document.getElementById("new-type").value = "";
        document.querySelectorAll('.input-table input').forEach(input => input.value = "0");
    }
}

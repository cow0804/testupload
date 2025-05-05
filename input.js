// input.js
async function getFileSha(token, owner, repo, path) {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
        headers: { 'Authorization': `token ${token}` }
    });
    const data = await response.json();
    return data.sha;
}

async function addFlightData() {
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
    if (newData.length === sections.length * categories.length) {
        flightDataArray.push(...newData);

        const updatedArrayString = "let flightDataArray = " + JSON.stringify(flightDataArray, null, 2) + ";";
        const token = prompt("請輸入你的 GitHub Personal Access Token：");
        if (token) {
            try {
                const sha = await getFileSha(token, "cow0804", "testupload", "data.js");
                const updateResponse = await fetch(`https://api.github.com/repos/cow0804/testupload/contents/data.js`, {
                    method: 'PUT',
                    headers: {
                        'Authorization': `token ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        message: "更新航班資料",
                        content: btoa(unescape(encodeURIComponent(updatedArrayString))),
                        sha: sha
                    })
                });

                if (updateResponse.ok) {
                    alert("資料已成功上傳至 GitHub！");
                } else {
                    const errorData = await updateResponse.json();
                    alert("上傳失敗：" + errorData.message);
                }
            } catch (error) {
                alert("上傳失敗：" + error.message);
            }
        }
        // 清空輸入欄位
        document.getElementById("new-flight").value = "";
        document.getElementById("new-type").value = "";
        document.querySelectorAll('.input-table input').forEach(input => input.value = "0");
    }
}

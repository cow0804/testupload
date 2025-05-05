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
        alert("資料新增成功！請返回主頁查看。");

        // 清空輸入欄位
        document.getElementById("new-flight").value = "";
        document.getElementById("new-type").value = "";
        document.querySelectorAll('.input-table input').forEach(input => input.value = "0");
    }
}

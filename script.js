// 航班資料（陣列形式）
const flightDataArray = [
    // 航班 907
    ["907", "頭車", "長車", { kitchen: 1, bar: 0, elderly: 0, water: 1, total: 2 }],
    ["907", "頭車", "短車", { kitchen: 0, bar: 1, elderly: 0, water: 1, total: 2 }],
    ["907", "頭車", "焗爐", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["907", "頭車", "手挽", { kitchen: 0, bar: 0, elderly: 2, water: 1, total: 2 }],
    ["907", "中車", "長車", { kitchen: 1, bar: 0, elderly: 0, water: 1, total: 2 }],
    ["907", "中車", "短車", { kitchen: 0, bar: 1, elderly: 0, water: 1, total: 2 }],
    ["907", "中車", "焗爐", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["907", "中車", "手挽", { kitchen: 0, bar: 0, elderly: 2, water: 1, total: 2 }],
    ["907", "尾車", "長車", { kitchen: 5, bar: 1, elderly: 0, water: 0, total: 6 }],
    ["907", "尾車", "短車", { kitchen: 1, bar: 1, elderly: 0, water: 0, total: 2 }],
    ["907", "尾車", "焗爐", { kitchen: 4, bar: 0, elderly: 0, water: 0, total: 4 }],
    ["907", "尾車", "手挽", { kitchen: 1, bar: 0, elderly: 6, water: 6, total: 12 }],

    // 航班 958
    ["958", "頭車", "長車", { kitchen: 6, bar: 1, elderly: 0, water: 0, total: 7 }],
    ["958", "頭車", "短車", { kitchen: 0, bar: 2, elderly: 0, water: 0, total: 2 }],
    ["958", "頭車", "焗爐", { kitchen: 9, bar: 0, elderly: 0, water: 0, total: 9 }],
    ["958", "頭車", "手挽", { kitchen: 6, bar: 0, elderly: 6, water: 0, total: 12 }],
    ["958", "中車", "長車", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["958", "中車", "短車", { kitchen: 0, bar: 1, elderly: 0, water: 0, total: 1 }],
    ["958", "中車", "焗爐", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["958", "中車", "手挽", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["958", "尾車", "長車", { kitchen: 9, bar: 4, elderly: 0, water: 0, total: 13 }],
    ["958", "尾車", "短車", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["958", "尾車", "焗爐", { kitchen: 9, bar: 0, elderly: 0, water: 0, total: 9 }],
    ["958", "尾車", "手挽", { kitchen: 6, bar: 0, elderly: 10, water: 0, total: 16 }],

    // 航班 982
    ["982", "頭車", "長車", { kitchen: 9, bar: 0, elderly: 0, water: 0, total: 9 }],
    ["982", "頭車", "短車", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["982", "頭車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["982", "頭車", "手挽", { kitchen: 5, bar: 0, elderly: 0, water: 0, total: 5 }],
    ["982", "中車", "長車", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["982", "中車", "短車", { kitchen: 0, bar: 1, elderly: 0, water: 0, total: 1 }],
    ["982", "中車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["982", "中車", "手挽", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["982", "尾車", "長車", { kitchen: 9, bar: 4, elderly: 0, water: 0, total: 13 }],
    ["982", "尾車", "短車", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["982", "尾車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["982", "尾車", "手挽", { kitchen: 6, bar: 0, elderly: 8, water: 0, total: 14 }],

    // 航班 434
    ["434", "頭車", "長車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["434", "頭車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["434", "頭車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["434", "頭車", "手挽", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["434", "中車", "長車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["434", "中車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["434", "中車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["434", "中車", "手挽", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["434", "尾車", "長車", { kitchen: 1, bar: 4, elderly: 0, water: 0, total: 5 }],
    ["434", "尾車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["434", "尾車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["434", "尾車", "手挽", { kitchen: 1, bar: 0, elderly: 5, water: 0, total: 6 }],

    // 航班 488
    ["488", "頭車", "長車", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["488", "頭車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["488", "頭車", "焗爐", { kitchen: 4, bar: 0, elderly: 0, water: 0, total: 4 }],
    ["488", "頭車", "手挽", { kitchen: 5, bar: 0, elderly: 1, water: 0, total: 6 }],
    ["488", "中車", "長車", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["488", "中車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["488", "中車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["488", "中車", "手挽", { kitchen: 6, bar: 0, elderly: 0, water: 0, total: 6 }],
    ["488", "尾車", "長車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["488", "尾車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["488", "尾車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["488", "尾車", "手挽", { kitchen: 1, bar: 0, elderly: 14, water: 0, total: 15 }],

    // 航班 691
    ["691", "頭車", "長車", { kitchen: 4, bar: 0, elderly: 0, water: 0, total: 4 }],
    ["691", "頭車", "短車", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["691", "頭車", "焗爐", { kitchen: 5, bar: 0, elderly: 0, water: 0, total: 5 }],
    ["691", "頭車", "手挽", { kitchen: 3, bar: 0, elderly: 0, water: 0, total: 3 }],
    ["691", "中車", "長車", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["691", "中車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["691", "中車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["691", "中車", "手挽", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["691", "尾車", "長車", { kitchen: 6, bar: 0, elderly: 0, water: 0, total: 6 }],
    ["691", "尾車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["691", "尾車", "焗爐", { kitchen: 10, bar: 0, elderly: 0, water: 0, total: 10 }],
    ["691", "尾車", "手挽", { kitchen: 3, bar: 0, elderly: 16, water: 0, total: 19 }],

    // 航班 705
    ["705", "頭車", "長車", { kitchen: 3, bar: 0, elderly: 0, water: 0, total: 3 }],
    ["705", "頭車", "短車", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["705", "頭車", "焗爐", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["705", "頭車", "手挽", { kitchen: 6, bar: 0, elderly: 0, water: 0, total: 6 }],
    ["705", "中車", "長車", { kitchen: 3, bar: 0, elderly: 0, water: 0, total: 3 }],
    ["705", "中車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["705", "中車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["705", "中車", "手挽", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["705", "尾車", "長車", { kitchen: 9, bar: 0, elderly: 0, water: 0, total: 9 }],
    ["705", "尾車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["705", "尾車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["705", "尾車", "手挽", { kitchen: 1, bar: 0, elderly: 14, water: 0, total: 15 }],

    // 航班 257
    ["257", "頭車", "長車", { kitchen: 3, bar: 0, elderly: 0, water: 0, total: 3 }],
    ["257", "頭車", "短車", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["257", "頭車", "焗爐", { kitchen: 4, bar: 0, elderly: 0, water: 0, total: 4 }],
    ["257", "頭車", "手挽", { kitchen: 5, bar: 0, elderly: 0, water: 0, total: 5 }],
    ["257", "中車", "長車", { kitchen: 6, bar: 0, elderly: 0, water: 0, total: 6 }],
    ["257", "中車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["257", "中車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["257", "中車", "手挽", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["257", "尾車", "長車", { kitchen: 14, bar: 0, elderly: 0, water: 0, total: 14 }],
    ["257", "尾車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["257", "尾車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["257", "尾車", "手挽", { kitchen: 7, bar: 0, elderly: 16, water: 0, total: 23 }],

    // 航班 771
    ["771", "頭車", "長車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["771", "頭車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["771", "頭車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["771", "頭車", "手挽", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["771", "中車", "長車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["771", "中車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["771", "中車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["771", "中車", "手挽", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["771", "尾車", "長車", { kitchen: 1, bar: 4, elderly: 0, water: 0, total: 5 }],
    ["771", "尾車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["771", "尾車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["771", "尾車", "手挽", { kitchen: 1, bar: 0, elderly: 5, water: 0, total: 6 }],

    // 航班 564
    ["564", "頭車", "長車", { kitchen: 5, bar: 0, elderly: 0, water: 0, total: 5 }],
    ["564", "頭車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["564", "頭車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["564", "頭車", "手挽", { kitchen: 3, bar: 0, elderly: 0, water: 0, total: 3 }],
    ["564", "中車", "長車", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["564", "中車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["564", "中車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["564", "中車", "手挽", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["564", "尾車", "長車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["564", "尾車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["564", "尾車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["564", "尾車", "手挽", { kitchen: 1, bar: 0, elderly: 3, water: 0, total: 4 }],

    // 航班 596
    ["596", "頭車", "長車", { kitchen: 6, bar: 0, elderly: 0, water: 0, total: 6 }],
    ["596", "頭車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["596", "頭車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["596", "頭車", "手挽", { kitchen: 3, bar: 0, elderly: 0, water: 0, total: 3 }],
    ["596", "中車", "長車", { kitchen: 4, bar: 0, elderly: 0, water: 0, total: 4 }],
    ["596", "中車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["596", "中車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["596", "中車", "手挽", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["596", "尾車", "長車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["596", "尾車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["596", "尾車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["596", "尾車", "手挽", { kitchen: 1, bar: 0, elderly: 3, water: 0, total: 4 }],

    // 航班 722
    ["722", "頭車", "長車", { kitchen: 4, bar: 0, elderly: 0, water: 0, total: 4 }],
    ["722", "頭車", "短車", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["722", "頭車", "焗爐", { kitchen: 7, bar: 0, elderly: 0, water: 0, total: 7 }],
    ["722", "頭車", "手挽", { kitchen: 3, bar: 0, elderly: 0, water: 0, total: 3 }],
    ["722", "中車", "長車", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["722", "中車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["722", "中車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["722", "中車", "手挽", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["722", "尾車", "長車", { kitchen: 4, bar: 0, elderly: 0, water: 0, total: 4 }],
    ["722", "尾車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["722", "尾車", "焗爐", { kitchen: 3, bar: 0, elderly: 0, water: 0, total: 3 }],
    ["722", "尾車", "手挽", { kitchen: 1, bar: 0, elderly: 15, water: 0, total: 16 }],

    // 航班 723
    ["723", "頭車", "長車", { kitchen: 4, bar: 0, elderly: 0, water: 0, total: 4 }],
    ["723", "頭車", "短車", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["723", "頭車", "焗爐", { kitchen: 7, bar: 0, elderly: 0, water: 0, total: 7 }],
    ["723", "頭車", "手挽", { kitchen: 3, bar: 0, elderly: 0, water: 0, total: 3 }],
    ["723", "中車", "長車", { kitchen: 2, bar: 0, elderly: 0, water: 0, total: 2 }],
    ["723", "中車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["723", "中車", "焗爐", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["723", "中車", "手挽", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["723", "尾車", "長車", { kitchen: 4, bar: 0, elderly: 0, water: 0, total: 4 }],
    ["723", "尾車", "短車", { kitchen: 1, bar: 0, elderly: 0, water: 0, total: 1 }],
    ["723", "尾車", "焗爐", { kitchen: 3, bar: 0, elderly: 0, water: 0, total: 3 }],
    ["723", "尾車", "手挽", { kitchen: 1, bar: 0, elderly: 15, water: 0, total: 16 }],
];

// 載入表格資料
function loadTable() {
    const tableBody = document.getElementById("flight-table-body");
    tableBody.innerHTML = ""; // 清空表格

    flightDataArray.forEach(data => {
        const [flight, section, category, details] = data;
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${flight}</td>
            <td>${section}</td>
            <td>${category}</td>
            <td>${details.kitchen || ""}</td>
            <td>${details.bar || ""}</td>
            <td>${details.elderly || ""}</td>
            <td>${details.water || ""}</td>
            <td>${details.total || 0}</td>
        `;
        tableBody.appendChild(row);
    });
}

// 搜尋功能
function searchFlight() {
    const flightNumber = document.getElementById("flight-input").value.trim();
    const resultDiv = document.getElementById("search-result");
    resultDiv.style.display = "none"; // 先隱藏結果

    if (!flightNumber) {
        alert("請輸入航班號碼！");
        return;
    }

    const results = flightDataArray.filter(data => data[0] === flightNumber);

    if (results.length === 0) {
        resultDiv.innerHTML = `<p>找不到航班號碼 ${flightNumber} 的資料。</p>`;
        resultDiv.style.display = "block";
        return;
    }

    let resultHTML = `<h3>航班 ${flightNumber} 資料</h3>`;

    // 按車廂分組（頭車、中車、尾車）
    const sections = ["頭車", "中車", "尾車"];
    sections.forEach(section => {
        const sectionData = results.filter(data => data[1] === section);
        if (sectionData.length > 0) {
            resultHTML += `
                <h4>${section}</h4>
                <table>
                    <thead>
                        <tr>
                            <th>類別</th>
                            <th>廚房</th>
                            <th>酒倉</th>
                            <th>老㩒</th>
                            <th>水吧</th>
                            <th>總數</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            sectionData.forEach(data => {
                const [_, __, category, details] = data;
                resultHTML += `
                    <tr>
                        <td>${category}</td>
                        <td>${details.kitchen || ""}</td>
                        <td>${details.bar || ""}</td>
                        <td>${details.elderly || ""}</td>
                        <td>${details.water || ""}</td>
                        <td>${details.total || 0}</td>
                    </tr>
                `;
            });
            resultHTML += `</tbody></table>`;
        }
    });

    resultDiv.innerHTML = resultHTML;
    resultDiv.style.display = "block";
}

// 頁面載入時顯示表格
window.onload = loadTable;

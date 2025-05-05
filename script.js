// 航班資料（陣列形式）
let flightDataArray = [
    // 資料已在上一個回應中提供，略
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
// ... 其他資料（請參考上一個回應）
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

// 新增資料功能
function addFlightData() {
    const flight = document.getElementById("new-flight").value.trim();
    const section = document.getElementById("new-section").value;
    const category = document.getElementById("new-category").value;
    const kitchen = parseInt(document.getElementById("new-kitchen").value) || 0;
    const bar = parseInt(document.getElementById("new-bar").value) || 0;
    const elderly = parseInt(document.getElementById("new-elderly").value) || 0;
    const water = parseInt(document.getElementById("new-water").value) || 0;
    const total = parseInt(document.getElementById("new-total").value) || 0;

    if (!flight || kitchen + bar + elderly + water !== total) {
        alert("請輸入有效的航班號碼，並確保總數等於各項之和！");
        return;
    }

    const newData = [
        flight,
        section,
        category,
        { kitchen, bar, elderly, water, total }
    ];

    flightDataArray.push(newData);
    loadTable(); // 更新表格
    alert("資料新增成功！");

    // 清空輸入欄位
    document.getElementById("new-flight").value = "";
    document.getElementById("new-kitchen").value = "0";
    document.getElementById("new-bar").value = "0";
    document.getElementById("new-elderly").value = "0";
    document.getElementById("new-water").value = "0";
    document.getElementById("new-total").value = "0";
}

// 頁面載入時顯示表格
window.onload = loadTable;

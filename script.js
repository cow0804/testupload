// 航班資料（陣列形式）
const flightDataArray = [
    // 資料已在上方提供
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

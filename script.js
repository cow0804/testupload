// 航班資料（根據圖片和新的顯示格式調整）
const flightData = [
    // 航班 907
    {
        flight: "907", type: "HPE 32Q", reg: "0720", 
        head: { long: { kitchen: 1, bar: 1, total: 2 }, short: { bar: 1, water: 1, total: 2 }, oven: { kitchen: 2, total: 2 }, hand: { elderly: 2, water: 1, total: 2 } },
        middle: { long: { kitchen: 1, bar: 1, total: 2 }, short: { bar: 1, water: 1, total: 2 }, oven: { kitchen: 2, total: 2 }, hand: { elderly: 2, water: 1, total: 2 } },
        tail: { long: { kitchen: 5, bar: 1, total: 6 }, short: { kitchen: 1, bar: 1, total: 2 }, oven: { kitchen: 4, total: 4 }, hand: { kitchen: 1, elderly: 6, water: 6, total: 12 } }
    },
    // 航班 958
    {
        flight: "958", type: "LAL 33J", reg: "0745", 
        head: { long: { kitchen: 6, bar: 1, total: 7 }, short: { bar: 2, total: 2 }, oven: { kitchen: 9, total: 9 }, hand: { kitchen: 6, elderly: 6, total: 12 } },
        middle: { long: { kitchen: 2, total: 2 }, short: { bar: 1, total: 1 }, oven: { kitchen: 2, total: 2 }, hand: { kitchen: 2, total: 2 } },
        tail: { long: { kitchen: 9, bar: 4, total: 13 }, short: { kitchen: 2, total: 2 }, oven: { kitchen: 9, total: 9 }, hand: { kitchen: 6, elderly: 10, total: 16 } }
    },
    // 航班 982
    {
        flight: "982", type: "LAM 33E", reg: "0750", 
        head: { long: { kitchen: 9, total: 9 }, short: { kitchen: 2, total: 2 }, oven: { kitchen: 1, total: 1 }, hand: { kitchen: 5, total: 5 } },
        middle: { long: { kitchen: 2, total: 2 }, short: { bar: 1, total: 1 }, oven: { kitchen: 1, total: 1 }, hand: { kitchen: 1, total: 1 } },
        tail: { long: { kitchen: 9, bar: 4, total: 13 }, short: { kitchen: 2, total: 2 }, oven: { kitchen: 1, total: 1 }, hand: { kitchen: 6, elderly: 8, total: 14 } }
    },
    // 其他航班資料（請繼續根據圖片補充）
];

// 載入表格資料（保持原表格格式）
function loadTable() {
    const tableBody = document.getElementById("flight-table-body");
    tableBody.innerHTML = ""; // 清空表格

    flightData.forEach(data => {
        // 為每個航班的頭車、中車、尾車生成多行
        const sections = ["head", "middle", "tail"];
        sections.forEach(section => {
            const sectionData = data[section];
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${data.flight}</td>
                <td>${data.type}</td>
                <td>${data.reg}</td>
                <td>${section === "head" ? "頭車" : section === "middle" ? "中車" : "尾車"}</td>
                <td>長車: ${sectionData.long.total || 0}</td>
                <td>短車: ${sectionData.short.total || 0}</td>
                <td>焗爐: ${sectionData.oven.total || 0}</td>
                <td>手挽: ${sectionData.hand.total || 0}</td>
            `;
            tableBody.appendChild(row);
        });
    });
}

// 搜尋功能（調整為新的顯示格式）
function searchFlight() {
    const flightNumber = document.getElementById("flight-input").value.trim();
    const resultDiv = document.getElementById("search-result");
    resultDiv.style.display = "none"; // 先隱藏結果

    if (!flightNumber) {
        alert("請輸入航班號碼！");
        return;
    }

    const flight = flightData.find(data => data.flight === flightNumber);

    if (!flight) {
        resultDiv.innerHTML = `<p>找不到航班號碼 ${flightNumber} 的資料。</p>`;
        resultDiv.style.display = "block";
        return;
    }

    let resultHTML = `<h3>航班 ${flightNumber} 資料 機型 ${flight.type.split(" ")[1]}</h3>`;

    // 定義顯示車廂的函數
    const renderSection = (sectionName, sectionData) => {
        return `
            <h4>${sectionName}</h4>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>廚房</th>
                        <th>酒倉</th>
                        <th>老㩒</th>
                        <th>水吧</th>
                        <th>總數</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>長車</td>
                        <td>${sectionData.long.kitchen || ""}</td>
                        <td>${sectionData.long.bar || ""}</td>
                        <td>${sectionData.long.elderly || ""}</td>
                        <td>${sectionData.long.water || ""}</td>
                        <td>${sectionData.long.total || 0}</td>
                    </tr>
                    <tr>
                        <td>短車</td>
                        <td>${sectionData.short.kitchen || ""}</td>
                        <td>${sectionData.short.bar || ""}</td>
                        <td>${sectionData.short.elderly || ""}</td>
                        <td>${sectionData.short.water || ""}</td>
                        <td>${sectionData.short.total || 0}</td>
                    </tr>
                    <tr>
                        <td>焗爐</td>
                        <td>${sectionData.oven.kitchen || ""}</td>
                        <td>${sectionData.oven.bar || ""}</td>
                        <td>${sectionData.oven.elderly || ""}</td>
                        <td>${sectionData.oven.water || ""}</td>
                        <td>${sectionData.oven.total || 0}</td>
                    </tr>
                    <tr>
                        <td>手挽</td>
                        <td>${sectionData.hand.kitchen || ""}</td>
                        <td>${sectionData.hand.bar || ""}</td>
                        <td>${sectionData.hand.elderly || ""}</td>
                        <td>${sectionData.hand.water || ""}</td>
                        <td>${sectionData.hand.total || 0}</td>
                    </tr>
                </tbody>
            </table>
        `;
    };

    // 顯示頭車、中車、尾車
    resultHTML += renderSection("頭車", flight.head);
    resultHTML += renderSection("中車", flight.middle);
    resultHTML += renderSection("尾車", flight.tail);

    resultDiv.innerHTML = resultHTML;
    resultDiv.style.display = "block";
}

// 頁面載入時顯示表格
window.onload = loadTable;

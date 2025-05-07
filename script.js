// script.js
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
    
    let type = results[0][1]; // 獲取機型
    let resultHTML = `<h3>航班 ${flightNumber} 資料 機型 ${type}</h3>`;
    
    // 按車廂分組（頭車、中車、尾車）
    const sections = ["頭車", "中車", "尾車"];
    sections.forEach(section => {
        const sectionData = results.filter(data => data[2] === section);
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
                const [_, __, ___, category, details] = data;
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
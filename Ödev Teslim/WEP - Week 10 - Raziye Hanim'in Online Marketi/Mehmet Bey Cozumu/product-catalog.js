function formatDate(pDate) {
    return pDate.toLocaleDateString(`de-CH`);
}

function createProductCatalog(plist) {
    return `
        <table>
            ${createProductCatalogHeader()}
            ${createProductLines(plist)}
        </table>
    `;
}

function createProductCatalogHeader() {
    return `
        <tr>
            <th>Name</th>
            <th>Calory</th>
            <th>Exp. Date</th>
            <th>Price</th>
            <th></th>
            <th></th>
        </tr>
    `;
}

function createProductLines(plist) {
    return plist.map((product, index) => `
        <tr>
            <td>${product.productName}</td>
            <td>${product.totalCalories}</td>
            <td>${formatDate(product.expireDate)}</td>
            <td>${product.price}</td>
            <td><img src="${product.productImage}"></img></td>
            <td><button id="${index}">add</button></td> 
        </tr>
    `).join("");
}

function addButtonClickedEvent(pEvent) {
    let clickedElement = pEvent.target;
    if (clickedElement.tagName.toLowerCase() === "button") {
        let index = parseInt(clickedElement.id);
        let selectedProduct = productList[index];
        basketList.push(selectedProduct);
    }
}
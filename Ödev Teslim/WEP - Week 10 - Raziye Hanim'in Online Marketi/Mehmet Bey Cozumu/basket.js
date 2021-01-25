function updateBasket(pList) {

}

function crateBasket() {
    return `
        <table>
            ${createBasketItems(pList)}
            ${createTotalSection(pList)}
        </table>
    `;
}

function createBasketItems(pList) {
    return plist.map((product, index) => `
        <tr>
            <td>${product.productName}</td>
            <td>${product.price}</td>
            <td><img src="${product.productImage}"></img></td>
            <td><button id="${index}">add</button></td> 
        </tr>
    `).join("");
}

function createTotalSection(pList) {
    return `
        <tr>
            <td colspan="2">Total Price</td>
            <td colspan="2">3.60 Fr.</td>
        </tr>
    `;
}
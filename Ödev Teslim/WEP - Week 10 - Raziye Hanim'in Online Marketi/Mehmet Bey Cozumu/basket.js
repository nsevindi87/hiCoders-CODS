const basketList = [];

//main - secilen ürünleri buradan basketListe atmaya yarar
function updateBasket(pProduct) {
    basketList.push(pProduct);
    document.querySelector("#basket-container").innerHTML = createBasket(basketList)
}

//Sepet olusturma ANA Semasi
function createBasket(pList) {
    return `
        <table>
            ${createBasketItems(pList)}
            ${createTotalSection(pList)}
        </table>
    `;
}

//Sepete eklenen ürün özelliklerini ceken fonksiyon
function createBasketItems(pList) {
    return pList.map((product, index) => `
        <tr>
            <td>${product.productName}</td>
            <td>${product.price}</td>
            <td><img src="${product.productImage}"></img></td>
            <td><button id="${index}">add</button></td> 
        </tr>
    `).join("");
}

//Sepete eklenen ürünlerin fiyatlatini toplama fonksiyonu
function createTotalSection(pList) {
    let total = 0;
    pList.forEach(p => total += p.price);
    //pList.reduce(p=>total+p.price,0);

    return `
        <tr>
            <td colspan="2">Total Price</td>
            <td colspan="2">${priceFormat(total)} Fr.</td>
        </tr>
    `;
}

//fiyati düzenleme
function priceFormat(pMoney) {
    return pMoney.toFixed(2);
}
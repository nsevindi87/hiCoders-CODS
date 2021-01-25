/**
 * Müsteri solda dinamik olarak olusturulmus olan ürün katalogundan istedigi ürünleri "add" butonuna basarak
 * sepet kismina gecirecek. Her yeni eklenen ürün sepette alt alta gösterilecek.
 * 
 * Sol taraftaki panalde gösterilecek ürünler bir liste olarak verilmis. Bu listeyi uygun bir HTML yapisina cevirerek
 * sol panele yerlestirecegim. Panelin parent elemani üzeine "add" butonlarini dinleyecek bir EVENTLISTENER yerlestirecegim.
 * Her butona tiklana EVENT bilgisi kullanarak hangi ürünün sepete atilmak istedndigini anlayacak ve bu ürünü sepet icin olusturmus
 * oldugum diger listeye yerlestirecegim. Her ekleme islemi sonrasi sepet <html containerini sepet listesini kullanarak güncelleyecegim.
 * 
 * Silme islemi yine sepete container üzerine yerlestirilir. Olay gerceklestiginde alinan referans ile ilgili ürün sepet arrayinden kaldirilir 
 * ve sepert HTML güncellenir.
 */

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
    return plist.map(product => `
        <tr>
            <td>${product.productName}</td>
            <td>${product.totalCalories}</td>
            <td>${formatDate(product.expireDate)}</td>
            <td>${product.price}</td>
            <td><img src="${product.productImage}"></img></td>
            <td><button>add</button></td>
        </tr>
    `);
}

document.querySelector("#products-container").innerHTML = createProductCatalog(productList);
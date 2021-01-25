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

function createProductCatalog() {
    return `
        <table>
            ${createProductCatalogHeader}
            ${createProductCatalogLines}
        </table>
    `;
}

function createProductCatalogHeader() {
    return `
        <tr>
            <th>name</th>
            <th>Calory</th>
            <th>Exp. Date</th>
            <th>Price</th>
            <th></th>
            <th></th>
        </tr>
    `;
}

function createProductCatalogLines() {
    return `
        <tr>
            <td>Aprikosen</td>
            <td>200</td>
            <td>01.01.2022</td>
            <td>3.60</td>
            <td><img src="" alt=""></td>
            <td><button>add</button></td>
        </tr>
    `;
}
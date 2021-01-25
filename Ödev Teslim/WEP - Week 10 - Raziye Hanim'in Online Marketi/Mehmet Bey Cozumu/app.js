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









/**Hazir array icindeki ürünleri listelemek icin neler yapilmasi gerekmektedir.
 * 1 öncelikle HTML icerisine Table ile products tablosu acilmali
 * 2 icerisine tr ile yeni satir ve th ile baslik satiri olusturulmali
 * 3 devaminda yine tr ile yeni satir ve td ile ürünlerin yer alacagi satir olusturulmali.
 * 4 Baslik sabir kalacagi icin ana maddeler yazilmali
 * 5 ancak ürünler kismi dinamik olacagi icin hizlica ürün bilgileri girilmeli cunku ilerde bu bilgiler disaridan
 * arrayden hazir cekilecegi icin önemli degildir.
 * 6 Bu kisim ile ilgili olarak bilgiler tamamaen JS ye tasinmalidir
 * NASIL
 * JS altina gerektigi kadar fonksiyon acilmali
 * 1 Tablo genel elemeni fonksiyonu olusturulmali
 * 2 tablo baslik elementleri icin ayri bir fonksiyon olusturulmali
 * 3 tablo ürünleri elementleri icin ayri fonksiyon olusturulmali.
 *  4 Bu fonksiyonlarin bazilari hic degismeyecek ama bazilari devamli bilgi isleme icin kullanilacak
 * 5 SONRA BIRINCI fonksiyounun icine yani table elementinini icine `${}` kullanilarak Tablo Ana Basligi fonksiyonu cagrilacak. (yani IKINCI FONKSIYON)
 * Bu fonksiyon sadece baslik tanimladigi icin degisime ugramayacak
 * 6 SONRA yine BIRINCI fonksiyonun altina table elementinin icine `${}` kulanilarak Tablu Ürün Elementlerinin yer aldigi fonksiyon cagrilacak (yani Ucncu Fonksiyon)
 * 7 Asil islem ucuncu fonksiyonda donecegi icin array icindeki bilgiler buradan cekilecek
 * 8 cekme islemi pList.map(p=> `${p.productName}`) yardimi ile yapilacak.
 * Tabi bu kisim tr altindaki td elementinin icine yazilacak. Nereye yazilirsa bilgi oraya gider.
 * 9 Asil olan ürün isleme icin cekme islemi yapildiktan sonra array listesinin nasil gönderilecegi. 
 * 10 BU noktada document.querySelector("#products-container").innerHTML = createProductCatalog(); ile products
 * konteynirina tabloyu gönderiyoruz. 
 * DEVAMINDA createProductCatalog(productList)  ile ürünlerimize ait arrayi parametre olarak disaridan veriyoruz.
 * Catalog fonksiyonu bunu ücüncü ürün fonksiyonun aparametre olarak gönderiyor.
 * Ücuncu foksiyon da bunu alt isleme elemanlarina parametre olarak gönderiyor.
 * pList.map ise bu array icindeki her bir objecti ayri ayri tasnife tabi tutp istenilen bilgileri icinden aliyor.
 * Ortaya da bizim ücüncü fonsiyonda olmasini istedigimiz sira ile bilgiler tablodaki yerlerini aliyor.
 * 
 * BUNDAN SONRA URUNU BASKETE EKLEME ISLEMI

*/
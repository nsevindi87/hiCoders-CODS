const enCokTutulacakSayi = 10;
const enCokTahminHakki = 4;

//Rasgele vagon sayisinin belirlenmesi 
const suphelininVagonu = Math.floor((Math.random() * enCokTutulacakSayi) + 1); // floor = tam sayiya ceviriyor  
let tahminSayisi = 0; // random 0 (dahil)-1 (haric)  arasinda bir sayi belirliyor

//süphelinin vagonunun tahmin edilmesine dair loop
for (tahminSayisi = 0; tahminSayisi < enCokTahminHakki; tahminSayisi++) {
    let tahmin = +prompt("Tahmininizi Giriniz: "); //parseInt, +, sayiya ceviriyor
    //prompt ile disaridan tahmin aliniyor. alert ile de yapilabilir.
    if (suphelininVagonu === tahmin) {
        console.log("Tebrikler yakaladiniz...");
        break;
    } else if (tahmin > suphelininVagonu) {
        console.log("ön vagonlara bakiniz...")
    } else if (tahmin < suphelininVagonu) {
        console.log("arka vagonlara bakiniz...")
    }
}

//kac tahminde sonuca ulastigi ve kac puan aldigi
if (tahminSayisi < enCokTahminHakki) {
    console.log(`Tebrikleri ${tahminSayisi} hakkinizda bildiniz.  ${25 * (enCokTahminHakki-tahminSayisi)} puan kazandiniz.`)
    //bunlara template literals deniyor ve kesme isareti icinde yer almasi gerekiyor. Tek tirnak ile karistirma.
} else {
    console.log('Maalesef kaybettiniz. Puaniniz 0')
}
/** YEDEK PARCACI KEREM
 * Yedek parcaci Kerem'in aldigi yedek parcalar bir karisik ve düzensiz olarak bir arrayde toplanmistir.
 * Bu Array'deki parca isimlerine asagidaki islemler uygulanacaktir.
 * 1. Parca isimleri büyük harflere cevrilecek,
 * 2. Parca isimlerinden sayilar cikartilacak,
 * 3. Parca isimleri tersine cevrilecek,
 * 4. Her parcanin basina KEREMAG_ eklenecek,
 * 5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir.
 */

/* // *Mehmet Dogan - Fonksiyonlar ile Bosluklari gideme - Buyuk harfe dondur - arraya ayir  - sayilari cikar - sabit kelime ekle - tarih ekle

const YEDEK_PARCA_SABIT = "KREMAG_";
const parcaList = ["Ejjdj87st ", "sdds7dna ", " asdfask4", "ayna", "janT"];

function bosluklariEle(pYedekParca) {
    return pYedekParca.trim();
}

function buyukHarfeCevir(pYedekParca) {
    return pYedekParca.toUpperCase();
}

function arrayaAyir(pYedekParca) {
    return pYedekParca.split();
}

function sayilariEle(pYedekParca) {
    return pYedekParca.toString().replace(/[0-9]/g, "")
}

function sabitKelimeEkle(pYedekParca) {
    return YEDEK_PARCA_SABIT.concat(pYedekParca);
}

function tarihEkle(pYedekParca) {
    let tarih = new Date().toDateString("en");
    return pYedekParca + tarih.replaceAll(" ", "");
}


parcaList.forEach(function (pYedekParca) {
    let bosluguGiden = bosluklariEle(pYedekParca);
    let buyukHarfeDonen = buyukHarfeCevir(bosluguGiden);
    let arrayaAyrilanlar = arrayaAyir(buyukHarfeDonen);
    let sayilariSifirlananlar = sayilariEle(arrayaAyrilanlar);
    let kelimeEklenen = sabitKelimeEkle(sayilariSifirlananlar);
    let tarihEklenmisHal = tarihEkle(kelimeEklenen);
    console.log(tarihEklenmisHal);
}); */
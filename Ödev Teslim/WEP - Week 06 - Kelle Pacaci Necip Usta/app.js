/*
* Target = Bu haftaki programlama ödevimizde bir ciftciye yardim edecegiz. 
* Ciftcimiz anlasmali oldugu kelle pacaci Necip Ustaya gercek zamanli istatistik vermek istiyor. 
* Gayet müslüman olan Necip Usta ise, sordugu anda kac tane hayvan bacagi oldugu bilgisini almak istiyor.

* Program: 
* Ciftlikteki hayvanlar bir array icerisinde karisik sekilde tutulacak ve bu ciftlikte sadece su hayvanlar var:
* - inek
* - tavuk
* - domuz
* - koyun
*/

let animalList = ["inek", "tavuk", "domuz", "koyun"];
let inekSayisi = 10;
let tavukSayisi = 11;
let domuzSayisi = 12;
let koyunSayisi = 13;
let dortBacakliHayvanSayisi = inekSayisi + domuzSayisi + koyunSayisi;
let numberOfLegs = 4;
let numberOfLegsTavuk = 2;

for (index = 0; index < animalList.length; index++) {
    let kontrol = prompt("lütfen hayvan cinsi giriniz...");
    let hayvanSayisi = +prompt("lütfen sayisini giriniz...")

    //4 bacakli hayvan bacagina ozel
    if (kontrol === "inek" || kontrol === "domuz" || kontrol === "koyun") {
        console.log(`Su anda ${kontrol} hayvanina ait ${numberOfLegs * hayvanSayisi} bacak var`);
        break;
    }
    //2 bacakli hayvan bacagina
    else if (kontrol == "tavuk") {
        console.log(`Su anda ${kontrol} hayvanina ait ${numberOfLegsTavuk * hayvanSayisi} bacak var`);
        break;
    }
    //cins ve sayi girilmeden dogrudan giris yapildiginda mevcut tüm bacaklar
    else {
        console.log(`Su anda bütün hayvanlara ait toplam ${(numberOfLegsTavuk * dortBacakliHayvanSayisi) + (numberOfLegs * tavukSayisi)} bacak var`);
        break;
    }
}
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
let inekSayisi = 0;
let tavukSayisi = 0;
let domuzSayisi = 0;
let koyunSayisi = 0;
let numberOfLegs = 4;
let numberOfLegsTavuk = 2;

for (index = 0; index < animalList.length; index++) {
    let kontrol = prompt("lütfen hayvan cinsi giriniz...");
    let hayvanSayisi = +prompt("lütfen sayisini giriniz...")

    if (kontrol === "inek" || kontrol === "domuz" || kontrol === "koyun") {
        console.log(`Su anda ${kontrol} hayvanina ait ${numberOfLegs * hayvanSayisi} bacak var`);
        break;
    }
}
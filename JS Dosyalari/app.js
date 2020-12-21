//console.log("merhaba");

/*
let power=1;
for (i=0; i<=10; i++){                //initialization control increment
    console.log(i + "p"+power);
    power=2*power;
}
*/

/*let isBittimi = false;
let sayi =4;

while (isBittimi == false ){
    sayi=sayi+2;
  //  console.log ("sayinin son hali: ", sayi);
    if (sayi>100){
        isBittimi=true;
    }
}

console.log(sayi);*/


/*
for(let sayac = 0, yas=0; sayac <60 && yas>-10; sayac++, yas--){
    console.log("Sayac degeri: ", sayac);
}*/

/*
let myStringArray = ["Hello", "World"];
let arrayLength = myStringArray.length;
for (let i=0; i<arrayLength; i++){
    console.log(myStringArray[i]);
}*/

/*
for(let sayac = 0; sayac <10; sayac++){
    if(sayac%2 == 0){
        continue;
    }
    console.log(sayac)
}*/
/*
for(let sayac = 0; sayac <10; sayac++){
    if(sayac>5){
        break;
    }
    console.log(sayac)
}*/
/*
let aKenari = 3;
let bKenari = 4;
let cKenari = null;

function hesaplama() {
    cKenari = Math.sqrt((aKenari * aKenari) + (bKenari * bKenari));
    console.log("Hipotenüs ", cKenari);
}

hesaplama();*/

/*
function hesapla(kk, uk) {
    let alan = kk * uk;
    let cevre = (kk * uk) * 2;
    console.log("Dörtgenin alani", alan, "cevresi de", cevre);
}

hesapla(3, 5);
*/
/*
function faktoriyel(a) {
    let sonuc = 1;
    for (let index = 1; index <= a; index++) {
        sonuc = sonuc * index;
    }
    console.log(sonuc)
}
faktoriyel(5)
*/
/*
let sehir = ["ankara", "konya", "izmir", "mugla"]
let index = 0;
let text = "";
while (sehir[index]) {
    text += sehir[index] + "\n";
    index++;
}
console.log(text)
*/

/*
function buyukSayilar(deger) {
    return deger >= 25;
}

let yeniDizi = [1, 25, 45, 85, 69, 87].filter(buyukSayilar);
console.log(yeniDizi);
*/
/*
let meyveler = ["armut", "elma"];
let sebzeler = ["marul", "havuc"];
let bitkiler = [];
bitkiler = meyveler.concat(sebzeler);
console.log(bitkiler);
*/
/*
let meyveler = ["elma", "armut", "muz", "kiraz"];
let dizi1 = meyveler.join(",");
let dizi2 = meyveler.join("+");
console.log(dizi1, dizi2);
*/
/*
let meyveler = ["elma", "armut", "muz", "kiraz"];
let sonMeyveCikarma = meyveler.pop();
console.log(sonMeyveCikarma);
console.log(meyveler);
*/
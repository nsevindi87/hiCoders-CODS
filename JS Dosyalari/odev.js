let sayilarArray = [15, 36, 6, 58, 95, 84, 55, 66, 9, 77];

let diziUzunlugu = sayilarArray.length;


//array sayilarinin toplami
let sayilarToplami = 0;

for (let sayac = 0; sayac < diziUzunlugu; sayac++) {
    let sayi = sayilarArray[sayac];
    sayilarToplami = sayilarToplami + sayi;
}
console.log("Sayilar toplami: ", sayilarToplami);
console.log("Sayilarin ortalamasi: ", sayilarToplami / diziUzunlugu);


//array sayilarinin carpimi
let carpimi = 1;

for (let sayac = 0; sayac < diziUzunlugu; sayac++) {
    let sayi = sayilarArray[sayac];
    carpimi = carpimi * sayi;
}
console.log("Carpimi", carpimi);


//sayilarin karesi
let kareleri = 1;

for (let sayac = 0; sayac < diziUzunlugu; sayac++) {
    let sayi = sayilarArray[sayac];
    kareleri = sayi * sayi;
    console.log(sayi, "sayisinin karesi", kareleri)
}


//arraydeki en büyük sayi
let max = sayilarArray[0];

for (let index = 0; index < sayilarArray.length; index++) {
    let nextValue = sayilarArray[index];
    if (nextValue > max) {
        max = nextValue;
    }
}
console.log("Max sayi: ", max);



//arraydeki en kücük sayi
let min = sayilarArray[0];
for (let index = 0; index < sayilarArray.length; index++) {
    let nextValue = sayilarArray[index];
    if (nextValue < min) {
        min = nextValue;
    }
}
console.log("Min sayi: ", min);
let sayilarArray = [15, 36, 6, 58, 95, 84, 55, 66, 9, 77];
let sayilarToplami = 0;
let carpimi = 1;
let kareleri = 1;
let diziUzunlugu = sayilarArray.length;

//array sayilarinin toplami
for (let sayac = 0; sayac < diziUzunlugu; sayac++) {
    let sayi = sayilarArray[sayac];
    sayilarToplami = sayilarToplami + sayi;
}

//array sayilarinin carpimi
for (let sayac = 0; sayac < diziUzunlugu; sayac++) {
    let sayi = sayilarArray[sayac];
    carpimi = carpimi * sayi;
}


console.log("Sayilar toplami: ", sayilarToplami);
console.log("Sayilarin ortalamasi: ", sayilarToplami / diziUzunlugu);
console.log("Carpimi", carpimi)

//sayilarin karesi
for (let sayac = 0; sayac < diziUzunlugu; sayac++) {
    let sayi = sayilarArray[sayac];
    kareleri = sayi * sayi;
    console.log(sayi, "sayisinin karesi", kareleri)
}
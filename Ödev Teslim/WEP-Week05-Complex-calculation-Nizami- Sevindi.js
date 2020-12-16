let sayilarArray = [16, 36, 9, 58, 91, 81, 49, 4, 9, 64];

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
let sayilarinKareleri = 1;

for (let sayac = 0; sayac < diziUzunlugu; sayac++) {
    let sayi = sayilarArray[sayac];
    sayilarinKareleri = sayi * sayi;
    console.log(sayi, "sayisinin karesi", sayilarinKareleri) // sayilarinKokleri = []  /  sayilarinKareleri.push (Math.sqrt(sayilarArray[sayac]));
    // sayilarinKareleri = []  /  sayilarinKareleri.push (Math.pow(sayilarArray[sayac],2));
}

//sayilarik karekokleri
for (let sayac = 0; sayac < diziUzunlugu; sayac++) {
    let kareKoku = Math.sqrt(sayilarArray[sayac]);
    console.log("Array icindeki", sayilarArray[sayac], "sayisinin kare kökü ", kareKoku);
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
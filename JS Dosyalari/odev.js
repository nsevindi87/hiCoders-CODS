

let sayilarArray= [15,36,6,58,95,84,55,66,9,77];
let sayilarToplami = 0;
let sayiKareleri = 0;
let diziUzunlugu = sayilarArray.length

for (let sayac=0; sayac < diziUzunlugu; sayac++){
    let sayi = sayilarArray[sayac];
    sayilarToplami = sayilarToplami + sayi;
}
 
console.log ("Sayilar toplami: ", sayilarToplami);
console.log("Sayilarin ortalamasi: ", sayilarToplami/diziUzunlugu);



let enAzSayi = Math.min(sayilarArray)
console.log ("en az", enAzSayi)

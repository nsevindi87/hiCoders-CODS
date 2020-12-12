

let sayilarArray= [15,36,6,58,95,84,55,66,9,77];
let sayilarToplami = 0;
let carpimi =1;
let diziUzunlugu = sayilarArray.length;


for (let sayac=0; sayac < diziUzunlugu; sayac++){
    let sayi = sayilarArray[sayac];
    sayilarToplami = sayilarToplami + sayi;
}
for (let sayac=0; sayac < diziUzunlugu; sayac++){
    let sayi = sayilarArray[sayac];
    carpimi= carpimi*sayi;
}


 
console.log ("Sayilar toplami: ", sayilarToplami);
console.log("Sayilarin ortalamasi: ", sayilarToplami/diziUzunlugu);
console.log ("Carpimi", carpimi )

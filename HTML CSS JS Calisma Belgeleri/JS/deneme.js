let birinciSayi = 5;
let ikinciSayi = 3;

let toplamSonucu= birinciSayi+ikinciSayi;
console.log ("Toplama: " + toplamSonucu);

let cikarmaSonucu = birinciSayi - ikinciSayi;
console.log ("Sonuc: " + cikarmaSonucu);

let modAlma = birinciSayi % ikinciSayi;
console.log ("modAlma: " + modAlma);

let birFazlaArttirma = ++birinciSayi;
console.log ("arttirma: " + birFazlaArttirma);

let birAzaltma = --birinciSayi;
console.log ("azaltma: " + birAzaltma);

let ussunuAlma = birinciSayi ** ikinciSayi;
console.log ("üssü: " +ussunuAlma );

let bolmesonucu = birinciSayi / ikinciSayi;
console.log ("bölme: " + Math.round(bolmesonucu));

let sayilarEsitMi = birinciSayi==ikinciSayi;
console.log ("Sayilar esit mi?: " + sayilarEsitMi);

let x= 5;
let y=9;
let sonuc= y>9 || x===5;
let sonuc2 = !(x===y);
console.log ("Sonuc: " + sonuc + sonuc2 );

let a=3;
let b=12;
let c=10;
let sonuc3 = (a>b && b>c) || (b-c>a && a!=10);

console.log("sonuc: " + sonuc3)
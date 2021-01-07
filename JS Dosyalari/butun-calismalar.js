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
/*
let meyveler = ["elma", "armut", "muz", "kiraz"];
meyveler.push("üzüm");
console.log(meyveler);
*/

/*
let meyveler = ["elma", "armut", "muz", "kiraz"];
meyveler.sort();                        //siralama yapiyor
console.log(meyveler);
*/

/*
let i = 0;
let sayi = Math.round(Math.random() * 100);

let tahmin = 26;

if (tahmin > sayi) {
    console.log("Biraz asagi in...");
} else if (tahmin < sayi) {
    console.log("biraz yukari cik");
} else if (tahmin === sayi) {
    console.log("tebrikler");
}*/

/*
let text = "";
for (index = 0; index <= 10; index++) {
    if ((index % 2) === 0) {
        text += index + "<br>";
    }
}
console.log(text)
*/

/* FAKTOR
let sayi = 7,
    faktor = 1;
for (index = 1; index <= sayi; index++) {
    faktor *= index; // faktor = faktor * index
}
console.log(faktor);*/

/* function greeting(name, nachname) {

    let result = "Hello" + " " + name + " " + nachname;
    console.log(result);
}
greeting("Ali", "Yilmaz"); */


let emptyArray = [];
for (let index = 0; index < 10; index++) {
    emptyArray.push(++index);
}
console.log(emptyArray);

/*let numbers = [3,1,2,6,7,3,6,8,6,9,4];
let product = 1;

for(let index=0; index<numbers.length; index++){
    let nextValue = numbers[index];
    product = product * nextValue;
}
 console.log(product);

 let max= 0;
 for ( let index=0; index<numbers.length; index++){
    let nextValue=numbers [index];
    if (nextValue>max){
        max = nextValue;
    }
 }
 console.log(max);*/




/*let question = [
    "Yasiniz Kac",
    "Programlama seviniz nedir?",
    "Kac dil biliyorsun?"
];


for (let index = 0; index < question.length; index++) {
    const nextQuestion = question[index];
    
    let answer = prompt(nextQuestion);
    answerList.push(answer);
}


for (let index = 0; index < question.length; index++) {
    const nextQuestion = question[index];
    const nextAnswer = answerList[index];
    console.log("soru: ", nextQuestion, ", Cevap: ", nextAnswer)
}

for (let index = 0; index < question.length; index++){
    const nextQuestion = question[index];
    
}*/


/* let sayi = 2; // prompt ("Sayiyi gir");
 let sonucYazisi = "Sonuc: "
 if (sayi >3 ){ 
     let ikincisayi=5;
     let sonuc = sayi + ikincisayi;
     console.log (sonucYazisi, sonuc);
 }else{
     let ikincisayi = -4
     sonuc=sayi*ikincisayi;

    console.log(sonucYazisi, sonuc)
 }*/

//literal = degerin acik olarak görülebildigi durumlar. Ciplak ifadeler
//statement = ; ile biten code komutlari
//code block = süslü parantezler arasida kalan kisimlar. diger adi da SCOPE tur.
//code Reusing = tekrar kullanilan ifadeleri tek degiskene tanimlama. Kullanim kolayligi saglar.


//LOOP
//initialization = önce bir ilkleme yapilir. Sifirlama yapilir. 
//condition = devam edeyim mi sorusu. Hayir cikarir. Evet ise döngü baslar. 
//döngü = ya bir sayi kadar ya da bir is olana kadar döner.
//increment = Sayac
//decrement = Sayac


//bir is olana kadar döngü¨
/*
let power = 1;              // ilkleme
let n = 100;
while (power <= n/2){       // sürece
    power = 2*power;        // bu kismi yapmaya devam et
    console.log(power)
}
*/

//sayacli bir döngü
/*
let power = 1;
let n = 5;
for ( let i = 0; i<=n; i++){
    console.log(i+" "+ power);
    power++;
}*/

//while döngü denemesi
/*
let isbittimi = false;
let sayi = 4;
 while (isbittimi == false){
     sayi = sayi + 2;     //sayiyi ikiser ikiser arttir
     if (sayi > 100 ){
         isbittimi = true;
     }
 }
console.log("Is bitti, sonuc: ", sayi)*/


//for döngü denemesi
//sayacli döngülerdir
//su sayi kadar dön
//while da ilkleme disarda yapiliyor. 
//for da ilklemeler icerde yapilabiliyor

/*for (let sayac=0;                                          //initialization   sifirlama
    sayac< 60;                                            //control           ne zamana kadar
    sayac++){                                            //increment           arttirma
}*/

/*
for (let sayac=0, yas=0; sayac<=20 && yas>-10; sayac++, yas--){
    console.log("sayac degeri: ", sayac , yas)
}*/

/*
for (let sayac=0; sayac<10; sayac++){
    if (sayac >5 ){                  //eger sayi cift ise
        break;
    }

    console.log(sayac)
}
*/
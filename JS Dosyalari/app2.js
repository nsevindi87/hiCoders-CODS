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
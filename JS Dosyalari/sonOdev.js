//ilk harflerin büyük yazilmasi
let kucukHarfler = "asik veysel";
let buyukHarfler = kucukHarfler.replace("a", "A");
let sonBuyukHarfler = buyukHarfler.replace("v", "V");
console.log(sonBuyukHarfler);



//0-100 arasi sayilar  - her satirda 10 sayi
const sayilar = [];
let sayilarList = 0;
for (let index = 1; index <= 100; index++) {
    sayilar.push(index); //index ilerledikce sayilar listenin icine dahil olacak

    if (index == 10 || index == 20 || index == 30 || index == 40 || index == 50 || index == 60 || index == 70 || index == 80 || index == 90) {
        sayilar.push("\n"); // her adimdan sonra \n konulacak. Bu asamada sadece siraya koyacak
    }
}
sayilarList = sayilar.join(","); //array birlesecek ve aralara virgül koyacak. Bu noktada \n devreye girip bir alt satira gececek
console.log(sayilarList);


// 0-100 arasi asal sayilar




//sifre olusturma



//yildiz motifi yapma

let yildiz = [];
for (let sira = 0; sira <= 6; sira++) {
    yildiz.push("*");
    console.log(yildiz.join("")); //icerigi birlestirir ve her seferde bir arttirarak yazdirir. Parantez disina gelseydi sadece 6 yildiz basilirdi.
}
//ilk harflerin büyük yazilmasi
let kucukHarfler = "asik veysel";
let buyukHarfler = kucukHarfler.replace("a", "A");
let sonBuyukHarfler = buyukHarfler.replace("v", "V");
console.log(sonBuyukHarfler);

let isim = "asik veysel";
let splitedName = isim.split(" ");
for (let i = 0; i < splitedName.length; i++) {
    splitedName[i] = splitedName[i].charAt(0).toUpperCase() + splitedName[i].slice(1);
}
console.log(splitedName.join(" "));



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



function renderZeroToValue(pDeger) {
    let siraliListe = "";
    for (let i = 0; i <= pDeger; i++) {
        siraliListe += i;
        if (i != pDeger) {
            siraliListe += ",";
        }
        if (i != 0 && i % 10 == 0) {
            siraliListe += "\n";
        }
    }
}

// 0-100 arasi asal sayilar



//sifre olusturma
let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTVYZXW";
let lowercaseLetters = "abcdefghijklmnopqrstvyzxw";
let digits = "0123456789";
let symbols = ".,$!+*%&/()=?`";

function createPassword(pNumber) {
    for (let i = 0; i < pNumber; i++) {
        let passwordLength = Math.floor((Math.random() * 8) + 8);
        let password = "";
        for (let passwordIndex = 1; passwordIndex <= passwordLength; passwordIndex++) {
            if (passwordIndex % 3 == 0) {
                let randomUpperCaseLetters = Math.floor(Math.random() * uppercaseLetters.length);
                password += uppercaseLetters.charAt(randomUpperCaseLetters);
            } else if (passwordIndex % 4 == 0) {
                let randomLowerCaseLetters = Math.floor(Math.random() * lowercaseLetters.length);
                password += lowercaseLetters.charAt(randomLowerCaseLetters);
            } else if (passwordIndex % 5 == 0) {
                let randomDigits = Math.floor(Math.random() * digits.length);
                password += digits.charAt(randomDigits);
            } else {
                let randomSymbols = Math.floor(Math.random() * symbols.length);
                password += symbols.charAt(randomSymbols);
            }
        }
        console.log(password)
    }
}
createPassword(30);


//yildiz motifi yapma

let yildiz = [];
for (let sira = 0; sira <= 6; sira++) {
    yildiz.push("*");
    console.log(yildiz.join("")); //icerigi birlestirir ve her seferde bir arttirarak yazdirir. Parantez disina gelseydi sadece 6 yildiz basilirdi.
}
/*
* Target = Bu haftaki programlama ödevimizde bir ciftciye yardim edecegiz. 
* Ciftcimiz anlasmali oldugu kelle pacaci Necip Ustaya gercek zamanli istatistik vermek istiyor. 
* Gayet müslüman olan Necip Usta ise, sordugu anda kac tane hayvan bacagi oldugu bilgisini almak istiyor.

* Program: 
* Ciftlikteki hayvanlar bir array icerisinde karisik sekilde tutulacak ve bu ciftlikte sadece su hayvanlar var:
* - inek
* - tavuk
* - domuz
* - koyun
*/

/* let animalList = ["inek", "tavuk", "domuz", "koyun"];
let inekSayisi = 10;
let tavukSayisi = 11;
let domuzSayisi = 12;
let koyunSayisi = 13;
let dortBacakliHayvanSayisi = inekSayisi + domuzSayisi + koyunSayisi;
let numberOfLegs = 4;
let numberOfLegsTavuk = 2;

for (index = 0; index < animalList.length; index++) {
    let hayvanCinsi = prompt("lütfen hayvan cinsi giriniz...");
    let hayvanSayisi = +prompt("lütfen sayisini giriniz...")

    //4 bacakli hayvan bacagina ozel
    if (hayvanCinsi === "inek" || hayvanCinsi === "domuz" || hayvanCinsi === "koyun") {
        console.log(`Su anda ${hayvanCinsi} hayvanina ait ${numberOfLegs * hayvanSayisi} bacak var.`);
        break;
    }
    //2 bacakli hayvan bacagina ozel
    else if (hayvanCinsi == "tavuk") {
        console.log(`Su anda ${hayvanCinsi} hayvanina ait ${numberOfLegsTavuk * hayvanSayisi} bacak var.`);
        break;
    }
    //cins ve sayi girilmeden dogrudan giris yapildiginda mevcut tüm bacaklar
    else {
        console.log(`Su anda bütün hayvanlara ait toplam ${(numberOfLegsTavuk * dortBacakliHayvanSayisi) + (numberOfLegs * tavukSayisi)} bacak var.`);
        break;
    }
} */

let farm = ["Cow", "cOw", "chicken", "pig", "sheep", "pig", "chicken", "cow"];
const COW_LEG = 4;
const CHICKEN_LEG = 2;
const PIG_LEG = 4;
const SHEEP_LEG = 4;
let numberOfCow = 0,
    numberOfChicken = 0,
    numberOfPig = 0,
    numberOfSheep = 0;
/*
for(let index = 0;index < farm.length;index++){
    let animal = farm[index].toLowerCase();
    if(animal.includes("cow")){
        numberOfCow++;
    }else if(animal.includes("chicken")){
        numberOfChicken++;
    }else if(animal.includes("pig")){
        numberOfPig++;
    }else if(animal.includes("sheep")){
        numberOfSheep++;
    }else{
        console.log("Sorgulanan hayvanlardan degil");
    }
}
let totalAnimalLeg = (numberOfCow * COW_LEG) + (numberOfChicken * CHICKEN_LEG) + (numberOfPig * PIG_LEG) + (numberOfSheep * SHEEP_LEG);
let halalLeg = (numberOfCow * COW_LEG) + (numberOfChicken * CHICKEN_LEG) + (numberOfSheep * SHEEP_LEG);
let kellePacaLeg = (numberOfCow * COW_LEG) + (numberOfSheep * SHEEP_LEG);
console.log(totalAnimalLeg=${totalAnimalLeg});
console.log(halalLeg=${halalLeg});
console.log(kellePacaLeg=${kellePacaLeg});
*/
function LegOfAnimals(pAnimalArray, pAnimal, pAnimalLeg) {
    return pAnimalArray.filter(animal => animal.toLowerCase().includes(pAnimal)).map(animal => animal = pAnimalLeg).reduce((sayi1, sayi2) => sayi1 + sayi2)
}
let numberOfCowLeg = LegOfAnimals(farm, "cow", COW_LEG);
let numberOfChickenLeg = farm.filter(x => x.toLowerCase().includes("chicken")).map(x => x = CHICKEN_LEG).reduce((x, y) => x + y);
let numberOfPigLeg = farm.filter(x => x.toLowerCase().includes("pig")).map(x => x = PIG_LEG).reduce((x, y) => x + y);
let numberOfSheepLeg = farm.filter(x => x.toLowerCase().includes("sheep")).map(x => x = SHEEP_LEG).reduce((x, y) => x + y);
console.log(numberOfCowLeg);
console.log(numberOfChickenLeg);
console.log(numberOfPigLeg);
console.log(numberOfSheepLeg);
//Sabit degismeyenler
const SPARE_PART_PREFIX = "KEREMAG_";

//Sabit degiskenler
const yedekParca = ["kaporta34", "5lastik", "Akü", "buji6", "k12ece39", "yag100filtresi52"];

//Tanimlanan Fonksiyonlar

let changeUpper = (pSparePart) => pSparePart.toUpperCase();
let removeNumber = (pSparePart) => pSparePart.replace(/[0-9]/g, '');
let reverseWord = (pSparePart) => pSparePart.split("").reverse().join("");
let addWord = (pSparePart) => SPARE_PART_PREFIX + pSparePart;
let addDate = (pSparePart) => `${pSparePart} ${new Date()}`;

function changedList(pList) {
    let date = null; //neden?
    let newList = [];
    for (let index = 0; index < pList.length; index++) {
        pSiradakiParca = pList[index];
        upper = changeUpper(pSiradakiParca);
        remove = removeNumber(upper);
        reverse = reverseWord(remove);
        addKerem = addWord(reverse);
        date = addDate(addKerem);
        newList.push(date);
    }
    return newList.join("\n")

}

let result = changedList(yedekParca);
console.log(result)







/* let autoSparePartsList = ["Radytör44", "Sanziman", "filtre", "Direksiyon 5", " Ka Porta3", "ayna44"];

function toUpperCase(pSparePartList) {
    let upperCasePartsList = pSparePartList.map(part => part.toUpperCase())
    return upperCasePartsList;
    //console.log(upperCasePartsList);
};

toUpperCase(au); */
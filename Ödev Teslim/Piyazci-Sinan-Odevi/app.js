function getFishNames(pList) {
    return pList.map(fish => fish.fishType)
}

function convertToText(pList) {
    return pList.join(",");
}

function find(pSelector) {
    return document.querySelector(pSelector);
}

function updateUI(pContainer, pText) {
    pContainer.innerHTML = pText;
}


//Stog miktari 500 kg üzerinde olan balik isimleri

const fishListStockOver500 = fishFarm.filter(fish => fish.stockVolumeInKg >= 500);
const fishNameListInStockOver500 = getFishNames(fishListStockOver500);

const domContainerDishNameListInStock500 = find("#containerFischStockOver500");
updateUI(domContainerDishNameListInStock500, convertToText(fishNameListInStockOver500));



//Fiyat araligi 9 ile 12 arasindaki baliklar

const fishListBetween9Frand12Fr = fishFarm.filter(fish => fish.price >= 9 && fish.price <= 12);
const fishNameListBetween9Frand12Fr = getFishNames(fishListBetween9Frand12Fr);

updateUI(find("#containerFischPriceBetween9and12"), convertToText(fishNameListBetween9Frand12Fr));


//Sadece Bern'de ve kis ayinda satilan baliklar


const fishListFromBernSeasonWinter = fishFarm.filter(fish => fish.season === "Winter" && fish.saleLocations.includes("BE"));
const fishNameListFromBernSeasonWinter = getFishNames(fishListFromBernSeasonWinter);

find("#containerFischfromBernAndSoldWinter").innerHTML = convertToText(fishNameListFromBernSeasonWinter);

updateUI(find("#containerFischfromBernAndSoldWinter"), convertToText(fishNameListFromBernSeasonWinter));







//son kullanma tarihine göre balik siralama

//AB den geeln fiyat 10Fr den düsük baliklari alfabetik sirasi

//Toplam Balik Stok
const total = fishFarm.reduce((currentTotal, item) => {
    return item.stockVolumeInKg + currentTotal
}, 0);
console.log(total);
//En Pahali olan Balik

//En uzun süreli durabilen baliklar hangi ülkeden gelmektedir

//Kis ve Sonbahar sezonu icin SWISS ROMANDE REGION da satilam baliklarin ortalama fiyati

//Ticino Kantonu icin stokta toplam ne kadar balik mevcut
const ticino = fishFarm.filter((item) => {
    return item.saleLocations === "ZH";
});
console.log(ticino);

//Yazlik sezonda cikan ve AB disindan gelen ve ZH de satilan baliklarin ortalama gramaji ne kadar?
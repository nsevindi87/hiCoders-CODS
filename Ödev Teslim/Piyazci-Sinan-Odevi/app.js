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

function getFishListOver(pList, pVolume) {
    return pList.filter(fish => fish.stockVolumeInKg > pVolume);
}


function getFishListPriceBetween(pList, pLowerBound, pUpperBound) {
    return pList.filter(fish => fish.price >= pLowerBound && fish.price <= pUpperBound);
}

function getFishListSeasonAndCanton(pList, pSeason, pCanton) {
    return pList.filter(fish => fish.season.toUpperCase() === pSeason && fish.saleLocations.includes(pCantone))
}


//Stog miktari 500 kg üzerinde olan balik isimleri

updateUI(find("#containerFischStockOver500"), convertToText(getFishNames(getFishListOver(fishFarm, 500))));



//Fiyat araligi 9 ile 12 arasindaki baliklar

updateUI(find("#containerFischPriceBetween9and12"), convertToText(getFishNames(getFishListPriceBetween(fishFarm, 9, 12))));



//Sadece Bern'de ve kis ayinda satilan baliklar

const fishListFromBernSeasonWinter = fishFarm.filter(fish => fish.season === "Winter" && fish.saleLocations.includes("BE"));
updateUI(find("#containerFischfromBernAndSoldWinter"), convertToText(getFishNames(fishListFromBernSeasonWinter)));







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
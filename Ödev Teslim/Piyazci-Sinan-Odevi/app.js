//Stog miktari 500 kg üzerinde olan balik isimleri

const stog500ustu = fishFarm.filter((item) => {
    return item.stockVolumeInKg >= 500;
})

const stog500ustuBalikIsimler = stog500ustu.map((item) => {
    return item.fishType;
})
console.log(stog500ustuBalikIsimler);



//Fiyat araligi 9 ile 12 arasindaki baliklar

const fiyatAraligi = fishFarm.filter((item) => {
    return (item.price >= 9) && (item.price <= 12)
})
const fiyatAraligiIsimler = fiyatAraligi.map((item) => {
    return item.fishType;
})
console.log(fiyatAraligiIsimler);



//Bern ve kis ayinda satilan
const bernVeKis = fishFarm.filter((item) => {
    return (item.season === "Winter") && (item.saleLocations.includes("BE")); //önemli - object icindeki arrayin icine bakma
});
const bernveKisAyiIsimler = bernVeKis.map((item) => {
    return item.fishType;
})
console.log(bernveKisAyiIsimler);

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
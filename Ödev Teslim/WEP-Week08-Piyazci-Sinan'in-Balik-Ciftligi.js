const fishFarm = [{
        fishType: "Salmon",
        price: 15.70,
        entryDate: new Date(2021, 0, 1), // 01.01.2021
        durationInDays: 30,
        itemWeightInGrams: 145,
        originCountry: "Norway",
        season: "Winter",
        stockVolumeInKg: 6500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Seatrout",
        price: 7.90,
        entryDate: new Date(2021, 11, 12), // 12.12.2021
        durationInDays: 20,
        itemWeightInGrams: 460,
        originCountry: "Japan",
        season: "Winter",
        stockVolumeInKg: 1600,
        saleLocations: ["GL", "GR", "BE", "VS"],
    },
    {
        fishType: "Sailfish",
        price: 5.20,
        entryDate: new Date(2021, 3, 19),
        durationInDays: 15,
        itemWeightInGrams: 240,
        originCountry: "United Kingdom",
        season: "Spring",
        stockVolumeInKg: 500,
        saleLocations: ["ZH", "SH", "BL", "SO"],
    },
    {
        fishType: "Red Drum",
        price: 3.10,
        entryDate: new Date(2021, 5, 15),
        durationInDays: 18,
        itemWeightInGrams: 300,
        originCountry: "Poland",
        season: "Summer",
        stockVolumeInKg: 15500,
        saleLocations: ["FR", "GE", "NE", "TI"],
    },
    {
        fishType: "Pompano",
        price: 10,
        entryDate: new Date(2021, 8, 17),
        durationInDays: 20,
        itemWeightInGrams: 645,
        originCountry: "France",
        season: "Autumn",
        stockVolumeInKg: 1500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Bluefish",
        price: 13.70,
        entryDate: new Date(2021, 10, 11),
        durationInDays: 5,
        itemWeightInGrams: 845,
        originCountry: "Italy",
        season: "Winter",
        stockVolumeInKg: 200,
        saleLocations: ["NW", "OW", "UR", "LU"],
    },
    {
        fishType: "Mackerel",
        price: 8.90,
        entryDate: new Date(2021, 6, 18),
        durationInDays: 16,
        itemWeightInGrams: 150,
        originCountry: "GREECE",
        season: "Summer",
        stockVolumeInKg: 8100,
        saleLocations: ["AG", "BL", "BE", "VD", "TG"],
    },
    {
        fishType: "Perch",
        price: 11.90,
        entryDate: new Date(2021, 10, 1),
        durationInDays: 30,
        itemWeightInGrams: 222,
        originCountry: "Egypt",
        season: "Summer",
        stockVolumeInKg: 9500,
        saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
    },
    {
        fishType: "Mullet",
        price: 4.80,
        entryDate: new Date(2021, 2, 14),
        durationInDays: 30,
        itemWeightInGrams: 333,
        originCountry: "Vietnam",
        season: "Summer",
        stockVolumeInKg: 600,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Tuna",
        price: 19.50,
        entryDate: new Date(2021, 0, 1),
        durationInDays: 30,
        itemWeightInGrams: 250,
        originCountry: "Spain",
        season: "Winter",
        stockVolumeInKg: 2300,
        saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
    },
];

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
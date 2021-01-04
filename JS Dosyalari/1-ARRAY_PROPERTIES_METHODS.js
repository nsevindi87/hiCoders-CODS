/* //  1-  array.prototype.map() - bir nesneyi ayni halden baska bir hale getiriyor. Parcaliyor. 
// sayilar arrayinin iki katini bul gibi
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let result = numbers.map(function (number) { // let result = numbers.map(number => number * 2 );
    return number * 2;
});

console.log(numbers);
console.log(result); */


/* //   2- array.prototype.reduce()  - kendisine verilen nesneleri bir araya getirip sonuc üretiyor.  
//Yemekleri veriyoruz ve eat diyoruz  - sonuc olarak wc cikiyor
// Array icindekileri toplamak icin kullanilabilir.
const newArray = [1, 2, 3, 4, 5];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(newArray.reduce(reducer));
console.log(newArray.reduce(reducer, 5)); */


/* //   3- array.prototype.filter() 
//asdece vegetarian olanlari bir gruba topla - Yeni Array döndürür
function isBigEnough(value) {
    return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered); //12,130,44 */


/* //   4  -  array.prototype.find()  - filtreleme gibi düsünülebilir. ANCAK verilen degeri buldugu an cikar. Elemani döndürür Arrayi degil
function isBigEnough(value) {
    return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].find(isBigEnough);
console.log(filtered); //12

//------------------------
const inventory = [{
        name: 'apples',
        quantity: 2
    },
    {
        name: 'bananas',
        quantity: 0
    },
    {
        name: 'cherries',
        quantity: 5
    }
]

const result2 = inventory.find(fruit => fruit.name === 'cherries');
console.log(result2) */

/* // 5- array.prototype.some()   -  fonksiyondaki sarti herhangi biri karsilarsa true veya false döndürür
function isBigerThan10(element, index, array) {
    return element >= 10;
};

console.log([2, 5, 8, 1, 4].some(isBigerThan10));
console.log([12, 5, 8, 1, 4].some(isBigerThan10)); */

/* // 6- array.prototype.every()   -  fonksiyondaki sarti hepsi karsilarsa true veya false döndürür
function isBigerThan10(element, index, array) {
    return element >= 10;
};

console.log([12, 5, 18, 1, 4].every(isBigerThan10));
console.log([12, 54, 88, 96, 541].every(isBigerThan10)); */


/* //ARRAY lere ait 8 özellik ve örmekleri  - filter - map- find - forEach - Some - Every - Reduce -  Includes -

const items = [{
        name: 'Bike',
        price: 100
    },
    {
        name: 'TV',
        price: 200
    },
    {
        name: 'Album',
        price: 10
    },
    {
        name: 'Book',
        price: 5
    },
    {
        name: 'Phone',
        price: 500
    },
    {
        name: 'Computer',
        price: 1000
    },
    {
        name: 'Keyboard',
        price: 25
    },
];

//FILTER 
const filteredItems = items.filter((item) => {
    return item.price <= 100;
})

console.log(items);
console.log(filteredItems);

//MAP
const itemNames = items.map((item) => {
    return item.name;
})
console.log(itemNames);

const itemPrice = items.map((item) => {
    return item.price;
})
console.log(itemPrice);

//FIND
const foundItem = items.find((item) => {
    return item.name === 'Book'; //büyük kucuk harfe dikkat et. 
});
console.log(foundItem);

//forEach
items.forEach((item) => {
    console.log(item.name);
    console.log(item.price);
})

//SOME
const hasInexpensiveItem = items.some((item) => {
    return item.price <= 100;
})
console.log(hasInexpensiveItem); //true döner // bir tanesi sarti tasisa yeter

//EVERY
const hasInexpensiveItem2 = items.every((item) => {
    return item.price <= 100;
})
console.log(hasInexpensiveItem2); // false döner  //hepsinin sarti saglamasi lazim

//REDUCE
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0);
console.log(total);

//INCLUDES
const items2 = [1, 2, 3, 4, 5];
const includesNumber = items2.includes(2); //icinde 2 var mi yok mu?
console.log(includesNumber); */
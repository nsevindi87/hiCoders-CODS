/* //  1-  array.map() - bir nesneyi ayni halden baska bir hale getiriyor. Parcaliyor. 
// sayilar arrayinin iki katini bul gibi
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let result = numbers.map(function (number) { // let result = numbers.map(number => number * 2 );
    return number * 2;
});

console.log(numbers);
console.log(result); */


/* //   2- array.reduce()  - kendisine verilen nesneleri bir araya getirip sonuc üretiyor.  
//Yemekleri veriyoruz ve eat diyoruz  - sonuc olarak wc cikiyor
// Array icindekileri toplamak icin kullanilabilir.
const newArray = [1, 2, 3, 4, 5];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(newArray.reduce(reducer));
console.log(newArray.reduce(reducer, 5)); */


/* //   3- array.filter() 
//asdece vegetarian olanlari bir gruba topla - Yeni Array döndürür
function isBigEnough(value) {
    return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered); //12,130,44 */

//   3- array.foreach()
const myToDos = [];
myToDos.push('Buy Bread');
myToDos.push('Buy Tomato');
myToDos.push('Buy Milk');

myToDos.forEach(function (toDo, index) {
    console.log(`your number ${index} is ${toDo}`);
});


/* //   4  -  array.find()  - filtreleme gibi düsünülebilir. ANCAK verilen degeri buldugu an cikar. Elemani döndürür Arrayi degil
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

/* // 5- array.some()   -  fonksiyondaki sarti herhangi biri karsilarsa true veya false döndürür
function isBigerThan10(element, index, array) {
    return element >= 10;
};

console.log([2, 5, 8, 1, 4].some(isBigerThan10));
console.log([12, 5, 8, 1, 4].some(isBigerThan10)); */

/* // 6- array.every()   -  fonksiyondaki sarti hepsi karsilarsa true veya false döndürür
function isBigerThan10(element, index, array) {
    return element >= 10;
};

console.log([12, 5, 18, 1, 4].every(isBigerThan10));
console.log([12, 54, 88, 96, 541].every(isBigerThan10)); */

/* // 7- array.fill()
const array1 = [1, 2, 3, 4];
console.log(array1.fill(5, 1)); //1.indexten itibaren 5 ile doldurur. [ 1, 5,5,5]
console.log(array1.fill(0, 2, 4)); //2.indexten 4. endexe kadar(haric)  0 ile doldurur. [ 1, 2, 0,0] */

/* // 8- array.concat()
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const array3 = array1.concat(array2);
console.log(array3); */

/* // 8- array.concat()
const array1 = [1, 2, 3, 4];
console.log(array1.copyWithin(1, 3)) //3.indexi 1.nci indexe kopyala */



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
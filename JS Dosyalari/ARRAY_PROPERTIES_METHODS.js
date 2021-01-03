//array.prototype.map() - bir nesneyi ayni halden baska bir hale getiriyor. Parcaliyor. 
// sayilar arrayinin iki katini bul gibi
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let result = numbers.map(function (number) {
    return number * 2;
});
console.log(numbers);
console.log(result);


//array.prototype.reduce()  - kendisine verilen nesneleri bir araya getirip sonuc üretiyor.  
//Yemekleri veriyoruz ve eat diyoruz  - sonuc olarak wc cikiyor


//array.prototype.filter() 
//asdece vegetarian olanlari bir gruba topla - Yeni Array döndürür
function isBigEnough(value) {
    return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered); //12,130,44


//array.prototype.find()  - filtreleme gibi düsünülebilir. ANCAK verilen degeri buldugu an cikar. Elemani döndürür Arrayi degil
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
console.log(result2)
/**
 * müsteri iki blok halinde bir online magaza istiyor
 * 1- sol blokta ürünler olacak
 *   1.1 ürün özellikleri yazacak
 *   1.2 Satin alma butonu olacak
 * 2- sag blokta ise sepet olacak
 *   1.1 Sepetin altinda ürün fiyatlarinin toplandigi yer olacak
 * 
 * 3- soldaki ürünlere tiklandigi zaman ürün
 * - ürünlerin icinden secilen ürün cikacak
 * - listeye eklenecek
 * 
 * 4- Listenin altinda ürünlerin toplam fiyati yazdirilacak
 * 
 */

//Data Model
let shoppingList = 0;

//DOM API
let redBuyButton = document.querySelector("#red-buy-button")
let blueBuyButton = document.querySelector("#blue-buy-button")
let blackBuyButton = document.querySelector("#black-buy-button")
let orangeBuyButton = document.querySelector("#orange-buy-button")

let redTshirt = document.querySelector("#red-tsirt")
let blueTshirt = document.querySelector("#blue-tsirt")
let blackTshirt = document.querySelector("#black-tsirt")
let orangeTshirt = document.querySelector("#orange-tsirt")

let newProduct = document.querySelector("#new-product")
/* function buyButton(pColor) {
    document.querySelector(`#${pColor}-buy-button`)
} */

redBuyButton.addEventListener("click", function (pEvent) {
    newProduct.firstChild = "Red T-Shirt" + "\n" + "20.-"
});

blueBuyButton.addEventListener("click", function (pEvent) {
    newProduct.appendChild.innerHTML = "Blue T-Shirt" + "\n" + "20.-"
});
blackBuyButton.addEventListener("click", function (pEvent) {
    newProduct.innerHTML = "Red T-Shirt" + "\n" + "15.-"
});
orangeBuyButton.addEventListener("click", function (pEvent) {
    newProduct.innerHTML = "Red T-Shirt" + "\n" + "12.-"
});

function productAdd() {
    let product = document.createElement("article");
    let article = document.getElementById("new-product");
    product.src = redTshirt
    article.appendChild(product);
}
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

let redTshirt = document.querySelector("#red-tshirt")
let blueTshirt = document.querySelector("#blue-tshirt")
let blackTshirt = document.querySelector("#black-tshirt")
let orangeTshirt = document.querySelector("#orange-tshirt")

let newProduct = document.querySelector("#new-product")
/* function buyButton(pColor) {
    document.querySelector(`#${pColor}-buy-button`)
} */


//red
redBuyButton.addEventListener("click", buyRedTshirt)

function buyRedTshirt() {
    document.querySelector("#new-product").appendChild(redTshirt);
}

//blue
blueBuyButton.addEventListener("click", buyBlueTshirt)

function buyBlueTshirt() {
    document.querySelector("#new-product").appendChild(blueTshirt);
}

//black
blackBuyButton.addEventListener("click", buyBlackTshirt)

function buyBlackTshirt() {
    document.querySelector("#new-product").appendChild(blackTshirt);
}

//orange
orangeBuyButton.addEventListener("click", buyOrangeTshirt)

function buyOrangeTshirt() {
    document.querySelector("#new-product").appendChild(orangeTshirt);
}
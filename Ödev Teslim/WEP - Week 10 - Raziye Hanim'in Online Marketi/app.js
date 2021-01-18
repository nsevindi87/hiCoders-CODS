/**
 * müsteri iki blok halinde bir online magaza istiyor
 * 1- sol blokta ürünler olacak
 *   1.1 ürün özellikleri yazacak
 *   1.2 Satin alma butonu olacak
 * 2- sag blokta ise sepet olacak
 *   1.1 Sepetin altinda ürün fiyatlarinin toplandigi yer olacak
 * 
 * 3- soldaki ürünlere tiklandigi zaman ürün
 * - listeye eklenecek
 * - ürünlerin icinden ise secilen ürün cikacak
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
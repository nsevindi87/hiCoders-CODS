//Name: Your Age in Days
//onclick ile fonksiyon cagirma
//yeni elemen olusturma
//Elemente attribute atama
//Metin olusturma
//Elementin icine appenChild ile metin yerlestirme
//Elementi appendChild ile bir div icin yerlestirme

function ageInDays(){
let birthYear = prompt("Hangi yil dogdun?");
let ageInDaysTwo= (2021-birthYear)*365;
let h1 = document.createElement('h1');
let textAnswer=document.createTextNode("You are " + ageInDaysTwo + " days old.");
h1.setAttribute("id", "ageInDays");
h1.appendChild(textAnswer);
document.getElementById("flex-box-result").appendChild(h1);

};
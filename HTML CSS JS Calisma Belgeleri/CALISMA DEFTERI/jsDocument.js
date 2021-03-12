document.querySelector(".class")
document.querySelector("#id")

document.querySelector(".class").getAttribute("data-num");
document.querySelector(".class").classList.contains("navbar_collapse");
document.querySelector(".class").classList.remove("navbar_collapse");
document.querySelector(".class").classList.add("navbar_collapse");

document.getElementsByClassName("class")
document.getElementsByClassName("class")[0]
document.getElementsByClassName("class").innerHTML
document.getElementsByClassName("class").classList.add("classAdi")
document.getElementsByClassName("class").classList.remove("classAdi")
document.getElementsByClassName("class").addEventListener("click", fonksiyonAdi)
document.getElementsByClassName("class").addEventListener("mousemove", fonksiyonAdi)

document.getElementById("id").style.width = document.getElementById("id").value
document.getElementById("id").style.cssText = `width:${document.getElementById("id").value}`

document.querySelectorAll(".btn");


window.addEventListener("scroll", fonksiyonAdi)
window.scrollTo(0,0)
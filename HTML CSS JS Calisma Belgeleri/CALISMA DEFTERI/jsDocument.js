document.querySelector(".class")
document.querySelector("#id")
document.getElementsByClassName("class")
document.getElementsByClassName("class")[0]
document.getElementsByClassName("class").innerHTML
document.getElementsByClassName("class").classList.add("classAdi")
document.getElementsByClassName("class").classList.remove("classAdi")
document.getElementsByClassName("class").addEventListener("click", fonksiyonAdi)
document.getElementsByClassName("class").addEventListener("mousemove", fonksiyonAdi)
document.getElementById("id").style.width = document.getElementById("id").value
document.getElementById("id").style.cssText = `width:${document.getElementById("id").value}`
document.querySelector(".class").getAttribute("data-num");


window.addEventListener("scroll", fonksiyonAdi)
window.scrollTo(0,0)
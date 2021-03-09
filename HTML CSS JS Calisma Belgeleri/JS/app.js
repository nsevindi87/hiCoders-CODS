let btn = document.querySelector(".btn");
let bdy = document.querySelector(".bdy");

let color = ["red", "blue", "yellow", "orange"];

btn.addEventListener("click", change);

function change(){
    

   bdy.style.backgroundColor = color[degistirRenk()]
};

function degistirRenk(){
    return Math.floor(Math.random()*color.length)

}
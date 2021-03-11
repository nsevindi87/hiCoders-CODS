const btns = document.querySelector(".btn");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".clear-equal");

for (let i=o; i<btns.clientHeight; i++){
    btn[i].addEventListener("click", function(){
        let number = btns[i].getAttribute("data-num");
        screen.value += number
    })
}

equalBtn.addEventListener("click", function(){
    let value = eval (screen.value);
    screen.value;
})

clearBtn.addEventListener("click", function(){
    screen.value ="";
})
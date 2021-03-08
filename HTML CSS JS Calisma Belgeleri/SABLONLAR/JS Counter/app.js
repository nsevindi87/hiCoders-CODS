/**BURADA NE VAR
 * Bütün .btn classlari secme 
 * Bütün .btn classlarinin gelmesini addeventListener ile durdurma ve click eventinden sonra gelmesini saglama
 * ve hangi butona tiklandi ise onun bütün classlarini getirtme
 * Bu classlari bir degiskene atama
 * Bu degiskendeki classlardan birsey icermesi halinde bir event atama
 */
//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    })
})
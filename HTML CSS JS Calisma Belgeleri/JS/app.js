const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const container = document.querySelector(".images");

let counter = 1;

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function nextSlide(){
    if(counter ===3){
        counter = 0;
    }
    counter++
    container.style.backgroundImage = `url(./bcg-${counter}.jpg)`
}
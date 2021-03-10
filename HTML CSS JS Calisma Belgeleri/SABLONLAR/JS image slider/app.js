const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const container = document.querySelector(".images");

let counter = 1;

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function nextSlide(){
    container.animate([{opacity:"0.1"}, {opacity:"1.0"}], {duration:1000, fill:"forwards"});
    if(counter ===3){                       //son foto numarasi
        counter = 0;                        //ilk fotodan bir kücük
    }
    counter++
    container.style.backgroundImage = `url(./bcg-${counter}.jpg)`
}
function prevSlide(){
    container.animate([{opacity:"0.1"}, {opacity:"1.0"}], {duration:1000, fill:"forwards"});
    if(counter === 1){                      //ilk foto numarasi
        counter = 4;                        //son sayidan bir büyük 
    }
    counter--
    container.style.backgroundImage = `url(./bcg-${counter}.jpg)`
}
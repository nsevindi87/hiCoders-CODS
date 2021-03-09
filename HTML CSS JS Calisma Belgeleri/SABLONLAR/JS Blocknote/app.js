const yazilar = [
    {
        name:"king",
        quote:" fuga nihil fugiat?"
    },
    {
        name: "Queen",
        quote: "Lorem ipsum dolor sit amet consectetur "  
    },
    {
        name:"Kral",
        quote:"adipisicing elit. Amet ab totam molestias nisi sint placeat"
    },
    {
        name:"Kralice",
        quote:"vero aliquid eligendi voluptate quidem quod error"
    },
];

const buton = document.querySelector("#btn");
const yazar = document.querySelector("#yazar");
const yazi = document.querySelector("#yazi");

buton.addEventListener("click", gosterYazi);

function gosterYazi(){
    let number = Math.floor(Math.random()*yazilar.length);
    yazar.innerHTML = yazilar[number].name;
    yazi.innerHTML = yazilar[number].quote;

}
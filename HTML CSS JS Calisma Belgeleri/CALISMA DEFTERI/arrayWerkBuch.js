
let arabalar = ["BMW", "Mercedes", "AUDI"];
let makineler = new Array("Nikon", "Canon", "sony");

arabalar.push("FORD en sona ekle");
arabalar.unshift("FIAT en basa ekle");
arabalar.pop();   //en sondakini sil
arabalar.shift();   //en bastakini sil

console.log(arabalar)


/****************************************************
 * ARREY icerisine OBJECT ler yazma ve bilgi cekme
 * 
 * ************************************************ */

 /* let library=[
    {
        title:"ince Memed",
        author:"Yasar Kemal",
        status: true
    },
    {
        title:"Kuyucakli Yusuf",
        author:"sabahattin Ali",
        status:true
    },
    {
        title:"Memleketimden Insan Manzaralari",
        author:"Nazim Hikmet",
        status:false
    }];

for(let i=0; i<library.length; i++){

    let book = library[i].title + "yazari"+ library[i].author + ".";

    if (library[i].status){
        console.log(book + " okundu")
    }else{
        console.log(book + "okunmadi");
    }
} */



/****************************************************
 * Arrey icerisindeki OBJECT ulasmak - object constructer
 * 
 * ************************************************ */

/*  let players = [
    new player ("ricardo", "queresma", 34),
    new player ("cenk", "tosun", 26),
    new player ("gökhan", "gönül", 33)
];

console.log(players[0]);
console.log(players[0].name); */

/****************************************************
 * ARRAY Metodlari - forEach         arrayAdi.forEach(fuction(arrayElementi, indexNumarasi){//kod blogu})
 * 
 * ************************************************ */
/*
 const numbers =[1,2,3,4,5];

numbers.forEach(consoleItem2);

function consoleItem(item, index, arr){
    console.log(item);                         //array icindeki her bir eleman ayri ayri getirir.
}


function consoleItem2(item, index, arr){
    console.log("a["+ index + "]="+ item);     // index kendiliginden gelen bir parametre  a[0]=1
}

//-----------------------------------------------------------------------------------------------------

const numbers =[1,2,3,4,5];

numbers.forEach((item, index, arr) => {
    console.log("a["+ index + "]="+ item);
});

//-----------------------------------------------------------------------------------------------------

const numbers2 =[1,2,3,4,5];

numbers2.forEach((item, index, arr) => {
    console.log(arr);                          //bütün arrayi tek tek yazdiriyor - length adedince [ 1, 2, 3, 4, 5 ]
});

//-----------------------------------------------------------------------------------------------------

const numbers3 =[1,2,3,4,5];
let sum = 0;
numbers3.forEach(item => {
    sum+=item;                                  //array icerisindekileri toplama
});
console.log(sum)

//-----------------------------------------------------------------------------------------------------


const letters = ["a","b","a","b","c","d","a","d","b","a","c"];

let count = {};
letters.forEach(item => {
    if(count[item]){
        count[item]++;                         //ilkleme sonrasi sayi arttirma  ?
    }else{
        count[item]= 1;                        //ilkleme
    }
});
console.log(count)

//------------------------------------------------------------------

var sebzeReyonu = [“kabak”, “patlican”, “brokoli”, “lahana”, “havuç”, “ıspanak”, “kereviz”, “soğan”, “marul”,
                    “roka”, “mantar”, “patates”, “kereviz”, “salatalık”, “sarımsak”];

 sebzeReyonu.forEach(function(sebzeAdi, element, deneme){
                     document.getElementById(“sebzeListesi”).innerHTML += “<li>” + sebzeAdi +”</li>”;
});


//---------------------------------------------------------------------------------

let bisiklet = new Object();

bisiklet = {
    adi: "TREK FUEL EX 8 PLUS",
    kadro: "Alpha Platinum Alüminyum, ABP, Boost148, Mino Bağlantısı, Kontrol Freak iç rotası, PF92, ISCG 05, G2 Geometri, 130 mm seyahat",
    jant: "SUNringlé Duroc 40 SL 28 delikli, boru içermeyen şeritler ve valfler dahildir",
    vites: "SRAM GX Kartal, 12 hızlı"
};
 
Object.keys(bisiklet).forEach(function(element){
    document.getElementById("bisikletOz").innerHTML += "<li>" + element + ";" + bisiklet[element] + "</li>";
})

//-------------------------------------------------------------------------

const days = ["pazartesi","salı","çarşamba","perşembe","cuma","cumartesi","pazar"];
let newDays = [];

days.forEach(function(element){
    if(element[0]=="p"){
        newDays.push(element);
    }
});
console.log(newDays)

*/

/****************************************************
 * ARRAY Metodlari - 
 * 
 * ************************************************ */
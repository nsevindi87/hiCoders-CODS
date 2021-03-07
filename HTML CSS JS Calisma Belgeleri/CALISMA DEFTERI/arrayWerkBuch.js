/* 
let arabalar = ["BMW", "Mercedes", "AUDI"];
let makineler = new Array("Nikon", "Canon", "sony");

arabalar.push("FORD en sona ekle");
arabalar.unshift("FIAT en basa ekle");
arabalar.pop();   //en sondakini sil
arabalar.shift();   //en bastakini sil

console.log(arabalar) */


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
 *                                   //var olan dizi üzerinde islem yapar ve yeni bir array vermez
 *                                  // her bir item icin bir kez calistirilir
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

//veya-----------------------------------------------------------------------------------------------------

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

days.forEach(function(element, index){
    if(element[0]=="p"){
        newDays.push(element);
        alert(element+ " " + index + ".siradadir")
    }
});
console.log(newDays)

*/

/****************************************************
 * ARRAY Metodlari - map   let newArray = arrayadi.map(foksiyonadi) veya arrayAdi.map(value=>value*2)
 *                         // verilen array üzerinde islem yapip yeni bir array olusturur. ve bir degiskene atayabiliriz
 *                         // her bir itemi tek seferde halleder
 * 
 * ************************************************ */
/* 
const numbers = [1,2,3,4,5];

numbers.map(double);                         //map ile fuction cagriliyor ve fuction her bir iteme gerekli islemi yaptiriyor

function double(value, index, arr){                   
    return value*2;
}

//---------------------------------------

const products =[
    {
        name:"Laptop",
        price:1000,
        count:5
    },
    {
        name:"Desktop",
        price:1500,
        count:2
    },
    {
        name:"Phone",
        price:500,
        count:10
    }
];

const totalProductsValue = products.map(item => ({     //array icerisindeki itemler map ile object e cevriliyor.
    name: item.name,
    totalValue: item.price * item.count
}));

//---------------------------------------------------------------

const str = ["1","2","3","4"];

const numberss = str.map(item=>Number(item));           // stringi sayiya cevirirler
const numberss = str.map(Number);           // stringi sayiya cevirirler

//------------------------------------------------------------------------------------

let sayi = [4,9,25,36];

let karekok = sayi.map(Math.sqrt);
console.log(karekok)
 */

/****************************************************
 * ARRAY Metodlari - filter   let newArray = arrayadi.filter(foksiyonadi) veya arrayAdi.map(value=>value%2===0)
 *                           // 
 *                           // 
 * ************************************************ */
/* 
const numbers =[1,2,3,4,5,6,7];
let even = numbers.filter(isEven);

function isEven (value){
    return value % 2 === 0;
}
console.log(even) 

//------------------------------------------------------------------------

const people = [
    {
        name:"Florin",
        age:26
    },
    {
        name:"Ivan",
        age:18
    },
    {
        name:"Jail",
        age:15
    }
];

let adult = people.filter(person => person.age>=18);     //array icerisindeki object leri filtre ile almak
console.log(adult)

//---------------------------------------------------------------------------------------

let numberss = [1,2,3,2,1,4,5,6,7,4,3];

let nums = numbers.filter((value, index,arr)=>{
    return arr.indexOf(value)===index;                       //array halinde ariyor. indexe esit olani return ediyor
})

console.log(nums)

//----------------------------------------------------------------------------------------
 */

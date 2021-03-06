
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
 * ARRAY Metodlari - forEach
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
*/

/****************************************************
 * ARRAY Metodlari - 
 * 
 * ************************************************ */
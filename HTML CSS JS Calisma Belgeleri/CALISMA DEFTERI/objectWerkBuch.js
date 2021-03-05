/****************************************************
 * OBJECT icerisinde foksiyon yazma ve cagirma
 * 
 * ************************************************ */

/* 
let player1 = {
    name: "Ricardo",
    lastName:"Queresma",
    age: 33,
    childs:["alex", "Sara", "Pablo"],
    fullName: function(){
        return this.name + " " + this.lastName;      //kendine ait bir özelligi
    }
}

console.log(player1.fullName())             //object icerisindeki function cagirma */



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
 * function ile OBJECT olusturma
 * 
 * ************************************************ */

/* function player(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
};

let playerA = new player ("ricardo", "queresma", 34);
let playerB = new player ("cenk", "tosun", 26);
let playerC = new player ("gökhan", "gönül", 33);

console.log(playerA)
console.log(playerB)
console.log(playerC) */



/****************************************************
 * 
 * 
 * ************************************************ */

let players = [
    new player ("ricardo", "queresma", 34),
    new player ("cenk", "tosun", 26),
    new player ("gökhan", "gönül", 33)
];

console.log(players[0]);
console.log(players[0].name);
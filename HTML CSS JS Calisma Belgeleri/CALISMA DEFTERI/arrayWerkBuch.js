
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

 let library=[
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
}
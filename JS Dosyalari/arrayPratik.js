/*
let hiCodersParticipantList = ["Oktay", "Hamide", "Gülsah", "süleyman", "Fatih", "Salih", "Adem"];

let personAtIndex3 = hiCodersParticipantList[3];
console.log(personAtIndex3);

//arayip bulma icin kolaylik  INCLUDES
let isPersonExists = hiCodersParticipantList.includes("Oktay");
console.log(isPersonExists);

console.log("Var mi? ", hiCodersParticipantList.includes("Oktay"))

for (let index = 0; index < hiCodersParticipantList.length; index++) {
    let nextValue = hiCodersParticipantList[index];
    if (nextValue === "Oktay") {
        console.log(true);
    }
}
*/

/*
let hiCodersParticipantList = ["Oktay", "Hamide", "Gülsah", "süleyman", "Fatih", "Salih", "Adem"];


//Kacinci sirada oldugunu bulmak icin   bastan aramaya basliyor indexOF
//lastIndexOf sondan baslyip bulmaya calisiyor
console.log(hiCodersParticipantList.indexOf("Hamide"))

let indexYeri = hiCodersParticipantList.indexOf("Adem")
console.log(indexYeri)

console.log(hiCodersParticipantList.lastIndexOf("Gülsah"))
*/

/*
//Array birlestirme

let hiCodersParticipantList = ["Oktay", "Hamide", "Gülsah", "süleyman", "Fatih", "Salih", "Adem"];
let hiCodersParticipantList2 = ["Ali", "Dursun", "Mehmet", "Can", "Serkan", "Ahmet", "Kazim"];

let totalParticipantList = hiCodersParticipantList.concat(hiCodersParticipantList2);
console.log(totalParticipantList);

//Array iceriklerini birlestirme / stringe döndürme
let stringifiedVersion = hiCodersParticipantList.join();
let stringifiedVersion2 = hiCodersParticipantList.join("/");
let stringifiedVersion3 = hiCodersParticipantList.join("");
let stringifiedVersion4 = hiCodersParticipantList.join("\n"); //line  brack
console.log(stringifiedVersion);
console.log(stringifiedVersion2);
console.log(stringifiedVersion3);
console.log(stringifiedVersion4);
*/

/*
//Ekleme cikarma
let hiCodersParticipantList = ["Oktay", "Hamide", "Gülsah", "süleyman", "Fatih", "Salih", "Adem"];

console.log(hiCodersParticipantList.push("Ali")); //push sona ekler ama dogrudan icerigi yazdirmaz. Kac icerik var onu yazar.
console.log(hiCodersParticipantList);

console.log(hiCodersParticipantList.unshift("Ekrem")); //unshitf basa ekler ama dogrudan icerigi yazdirmaz. Kac icerik var onu yazar.
console.log(hiCodersParticipantList);

console.log(hiCodersParticipantList.splice(3, 0, "Selcuk"));  //3. indexten sonra ekleme yap.  0 ise ilme anlaminda
console.log(hiCodersParticipantList);

*/
/*
let hiCodersParticipantList = ["Oktay", "Hamide", "Gülsah", "süleyman", "Fatih", "Salih", "Adem"];
hiCodersParticipantList.pop(); // pop sadece en sondan ve sadece bir eleman cikarir.
console.log(hiCodersParticipantList)
hiCodersParticipantList.shift();
console.log(hiCodersParticipantList)

hiCodersParticipantList.splice(2, 2); //aradan cikar. 2.den sonra 2 tane cikar.
console.log(hiCodersParticipantList)
*/

let numbers = [2, 6, 5, 9, 8, 7, 8, 5, 4, 5, 11];

let product = 1;
for (let index = 0; index < numbers.length; index++) {
    let nextValue = numbers[index];
    product = product * nextValue;
}
console.log(product);
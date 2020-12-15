const MAX_TUTULACAK_RAKAM = 10;
const MAX_HAK_SAYISI = 4;

//Random wagon numbers 
const suspiciousWagon = Math.floor((Math.random() * MAX_TUTULACAK_RAKAM) + 1);
let numberOfPredictions = 0;

for (numberOfPredictions = 0; numberOfPredictions < MAX_HAK_SAYISI; numberOfPredictions++) {
    let prediction = +prompt("Tahmininizi Giriniz: "); //parseInt, +, Number
    if (suspiciousWagon === prediction) {
        console.log("Congratulations correct guess...");
        break;
    } else if (prediction > suspiciousWagon) {
        console.log("see front wagons...")
    } else if (prediction < suspiciousWagon) {
        console.log("see back wagons...")
    }
}

//How many times
if (numberOfPredictions < MAX_HAK_SAYISI) {
    console.log(`Congratulations you have known ${numberOfPredictions} times. You got ${25 * (MAX_HAK_SAYISI-numberOfPredictions)} points`)
} else {
    console.log('Your lost your points 0')
}
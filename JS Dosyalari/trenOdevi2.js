//1 ila 10 arasinda rasgele bir sayi belirle
//floor tam sayiya cevirme - random 1 -10 arasinda bir sayi belirleme
const suspectWagon = Math.floor((Math.random() * 10) + 1);

for (let selectionRepeatNumber = 1; selectionRepeatNumber <= 4; selectionRepeatNumber++) {
    let chosenWagon = +prompt("Vagon sec");

    if (selectionRepeatNumber === 4 && chosenWagon !== suspectWagon) {
        alert('Hakkiniz bitti. Suclu bulunamadi. Suclu ${suspectWagon} numarali vagondaydi.');
        console.log('hakkiniz bitti. ')
    } else {
        if (chosenWagon == suspectWagon) {
            let puan = 100 - 25 * (selectionRepeatNumber - 1)
            alert('Tebrikler, ${selectionRepeatNumber} hakkinizda sucluyu buldunuz.Puaniniz ${puan}');
            break;
        } else if (chosenWagon < suspectWagon) {
            alert("Arkalara");
        } else if (chosenWagon > suspectWagon) {
            alert("ön vagonlara git");
        }
    }
}
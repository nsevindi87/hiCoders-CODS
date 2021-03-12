let date = new Date;
let hours, minutes, second;

//tekli sayilarin basina "0" ekleme fonksiyonu
function changeFormat(sayi) {
    if (sayi <= 9) {
        return "0" + sayi;
    } else {
        return sayi;
    }
}

//her 1000 salisede kendi kendine tekrar yazdirir.
setInterval(function () {
    let date = new Date;
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    hours = changeFormat(hours);
    minutes = changeFormat(minutes);
    seconds = changeFormat(seconds);
    console.log(hours + ":" + minutes + ":" + seconds)
}, 1000)
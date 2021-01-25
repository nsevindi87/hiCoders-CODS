/**
 * Digital Dünya Saati uygulamasi yapilacak
 *  1- Bas kisma h1 ile baslik yazilacak
 *  2- Alt kisma iki ayri div acilip flex ile yan yana konumlandirilacak
 *     2-1.DIV
 *      -Ilk kisma h4 ile ülke adi 
 *           -ülke adi kismina ${} ile disaridan paramatre ile ülke adi alinacak
 *      -Ikinci kisma ise saat gelecek
 *           -ikinci div de secilen ülkeye göre saat dilimi de degisecek
 *     2-2.DIV
 *      -Butonlara basildikca farkli ülke secenekleri gelecek
 * 
 */

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

function showTime(ders = 0) {
    let date = new Date;
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    hours = changeFormat(hours);
    minutes = changeFormat(minutes);
    seconds = changeFormat(seconds);
    let time = hours + ders + ":" + minutes + ":" + seconds
    document.getElementById("clock").innerHTML = time;
}
//setInterval(showTime(), 1000); switzerland
setInterval(showTime(-2), 1000); //istanbul
//setInterval(showTime(12), 1000);  //new york
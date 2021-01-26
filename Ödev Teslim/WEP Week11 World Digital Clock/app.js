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

function showTime(pHour) {
    let date = new Date;
    hours = changeFormat(date.getHours());
    minutes = changeFormat(date.getMinutes());
    seconds = changeFormat(date.getSeconds());

    let time = hours + ":" + minutes + ":" + seconds

    document.getElementById("clock").innerHTML = time;
    document.getElementById("clock").textContent = time;
    setTimeout(showTime, 1000)

}

//setInterval(showTime, 1000);
document.querySelector(".dropdown-content").addEventListener("click", function (pEvent) {
    if (pEvent.target.id === "switzerland") {
        return showTime()
    }
})
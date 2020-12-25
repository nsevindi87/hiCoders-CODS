/**
 * her array ilk slotunda ögrenci ismi ve sonrasinda sirasi ile Matematik, Almanca, Ingilizce ve Cografya derslerini icermektedir.
 * - Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi
 * - Herhangi bir dersden 70 puan üstü alanlarin listesi bulmasi
 * - Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi
 * - Sinifin hangi dersde en iyi nota sahip oldugunu gostermesi
 * - Sinifin en kötü oldugu dersi gostermesi
 * - Tüm derslerin en iyi ögrencilerini bulmasi
 */


const notes = [
    ["Hans", 80, 90, 10, 50],
    ["Ulrich", 94, 36, 76, 74],
    ["Olaf", 30, 60, 34, 78],
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62]
];

//ders ortalamalari
function ortalama(a) {
    let array = [];
    let toplam = 0;
    let ortalama = 0;
    for (let index = 0; index <= 7; index++) {
        array.push(notes[index][a])
        let next = array[index];
        toplam = toplam + next;
        ortalama = toplam / notes.length
    }
    console.log("Ders ortalamasi", ortalama);
}
ortalama(1) //matematik
ortalama(2) //almanca
ortalama(2) //ingilizce
ortalama(2) //cografya

//70 üstü notlar
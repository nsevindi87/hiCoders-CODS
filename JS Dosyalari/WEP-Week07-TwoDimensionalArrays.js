/**
 * her array ilk slotunda ögrenci ismi ve sonrasinda sirasi ile Matematik, Almanca, Ingilizce ve Cografya derslerini icermektedir.
 * - Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi
 * - Herhangi bir dersden 70 puan üstü alanlarin listesi bulmasi
 * - Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi
 * - Sinifin hangi dersde en iyi nota sahip oldugunu gostermesi
 * - Sinifin en kötü oldugu dersi gostermesi
 * - Tüm derslerin en iyi ögrencilerini bulmasi
 */
const MATH_DERS_INDEX = 1;
const ALM_DERS_INDEX = 2;
const ING_DERS_INDEX = 3;
const COG_DERS_INDEX = 4;

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

function notOrtalamasiBul(pDersIndex) {
    let notToplami = 0;
    let dersOrtalamasi = 0;
    for (let index = 0; index < notes.length; index++) {
        notToplami = notToplami + notes[index][pDersIndex];
    }
    dersOrtalamasi = notToplami / notes.length;
    return dersOrtalamasi;
}
console.log(notOrtalamasiBul(1)) //matematik
console.log(notOrtalamasiBul(2)) //almanca
console.log(notOrtalamasiBul(3)) //ingilizce
console.log(notOrtalamasiBul(4)) //cografya

//70 üstü notlar
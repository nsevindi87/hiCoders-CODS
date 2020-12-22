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

//Her dersin ortalamsi

let matematikArray = [];
let almancaArray = [];
let ingilizceArray = [];
let cografyaArray = [];
for (ogrenciSayaci = 0; ogrenciSayaci < notes.length; ogrenciSayaci++) {
    let matematik = notes[ogrenciSayaci][1];
    let almanca = notes[ogrenciSayaci][2];
    let ingilizce = notes[ogrenciSayaci][3];
    let cografya = notes[ogrenciSayaci][4];
    matematikArray.push(matematik);
    almancaArray.push(almanca);
    ingilizceArray.push(ingilizce);
    cografyaArray.push(cografya);
}
console.log(matematikArray);
console.log(almancaArray);
console.log(ingilizceArray);
console.log(cografyaArray);
const aracRengi = "siyah";
const aracMarkasi = "BMW";
const aracinModeli = "2020";
const daimiMusteriOlunanSure = 4;

const CEVAP_POZITIF = "Arabanizi tamir etmekteyiz.";
const CEVAP_NEGATIF_MODEL = "Ne yazik ki bu model araclari tamir edemiyoruz.";
const CEVAP_NEGATIF_RENK = "Ne yazik ki bu renk araclari tamir edemiyoruz.";

let result = "Maalesef tamir edemiyoruz";

if (daimiMusteriOlunanSure >= 5) {
    result = CEVAP_POZITIF;
} else {
    if (aracMarkasi == "VW" && aracinModeli > 2001 && aracinModeli < 2018 && aracRengi == "siyah") {
        result = CEVAP_POZITIF;
    } else if (aracMarkasi == "BMW" && aracRengi == "kirmizi" && aracinModeli < 2019 && aracinModeli > 2010) {
        result = CEVAP_POZITIF
    } else if (aracMarkasi == "BMW" && aracRengi == "siyah" && aracinModeli >= 2020) {
        result = CEVAP_POZITIF
    } else if (aracMarkasi == "AUDI" && (aracRengi == "siyah" || aracRengi == "kirmizi") &&
        ((aracinModeli < 2010 && aracinModeli > 2005) || (aracinModeli < 2020 && aracinModeli > 2014))) {
        result = CEVAP_POZITIF
    }
}
console.log(result)
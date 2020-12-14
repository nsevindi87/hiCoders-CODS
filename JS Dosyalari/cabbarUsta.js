//sabit degerler
const CEVAP_POZITIF = "Arabanizi tamir etmekteyiz.";
const CEVAP_NEGATIF_MODEL = "Ne yazik ki bu model araclari tamir edemiyoruz.";
const CEVAP_NEGATIF_RENK = "Ne yazik ki bu renk araclari tamir edemiyoruz.";

const MARKA_BMW = "BMW";
const MARKA_AUDI = "AUDI";
const MARKA_VW = "VW";

const RENK_KIRMIZI = "Kirmizi";
const RENK_SIYAH = "Siyah";

//program datasi / modeli  (degiskenler)
const arabaRengi = "kirmizi";
const arabaMarkasi = "Audi";
const arabaModeli = 2015;
const kacYillikMusteri = 6;

let result = "Firmamizda arabaniz tamir edilmemektedir.";

if (kacYillikMusteri >= 5) {
    result = CEVAP_POZITIF;
} else if (arabaMarkasi == MARKA_BMW) {
    if (arabaRengi == RENK_KIRMIZI) {
        if (arabaModeli > 2010 && arabaModeli < 2019) {
            result = CEVAP_POZITIF;
        } else {
            result = CEVAP_NEGATIF_MODEL
        }
    } else if (arabaRengi == RENK_SIYAH) {
        if (arabaModeli == 2020) {
            result = CEVAP_POZITIF;
        } else {
            result = CEVAP_NEGATIF_MODEL;
        }
    } else {
        result = CEVAP_NEGATIF_RENK;
    }

} else if (arabaMarkasi == MARKA_AUDI) {
    if (arabaRengi == RENK_KIRMIZI || arabaRengi == RENK_SIYAH) {
        if ((arabaModeli > 2005 && arabaModeli < 2010) || (arabaModeli > 2014 && arabaModeli < 2020)) {
            result = CEVAP_POZITIF;
        }
    }
}







console.log(result);
/**
 * Yeni ögrenci kaydi yapmak icin bir form olusturmamiz isteniyor.
 * 1 Kayit ekraninin sol tarafinda ögrenci bilgilerinin girildigi bir bölüm olacak
 *   1.1 inputlar ve ekleme butonu olacak
 *   1.2 inputlara girilecek degerler "value" ile cekilecek
 *   1.3 ekleme butonuna eklenecek olan eventListener ile alinan bilgiler yeni bir arraya eklenecek
 * 
 * 2 Kayit ekraninin sag tarafinda ögrenci bilgilerinin gösterildigi bir bölüm olacak
 *   2.1 Tablo ile bir baslik olusturulacak
 *   2.2 Tabloda bir liste bölümü olusturulacak
 *   2.3 Daha önce olusturulan Arrayden ilgili bilgiler getirilecek
 *   2.3 Cekilen bilgi adedince toplam sayi olusturulacak
 * 
 */


document.querySelector("#input-container").innerHTML = bilgiGirilenBolum();


function bilgiGirilenBolum() {
    return `
        <form action="" id="urunForm">
        ${bilgiGirdi}
        </form>
    `;
}

function bilgiGirdi() {
    return `
        <label for="ogrenciAdi" class="form-label">Ogrencinin Adi</label>
        <input type="text" class="form-control" id="ogrenciAdi" placeholder="Ogrencinin Adi">
        <label for="ogrenciSoyadi" class="form-label">Ogrencinin Adi</label>
        <input type="text" class="form-control" id="ogrenciSoyadi" placeholder="Ogrencinin Soyadi">
        <label for="ogrenciYasi" class="form-label">Ogrencinin Adi</label>
        <input type="text" class="form-control" id="ogrenciYasi" placeholder="Ogrencinin Yasi">
        <button type="submit" id="submit" class="btn btn-success">ADD</button>
    `;
}

const ogrenciAdi = document.querySelector("#ogrenciAdi");
const ogrenciSoyadi = document.querySelector("#ogrenciSoyadi");
const ogrenciYasi = document.querySelector("#ogrenciYasi");
const button = document.querySelector("#submit")



let eklenenOgrenciler = new Array();

function addItems(pIsim, pSoyad, pYas) {
    let student = {
        pIsim: ogrenciAdi.value,
        pSoyad: ogrenciSoyadi.value,
        pYas: ogrenciYasi.value
    }
    alert(pIsim, pSoyad, pYas)
    return eklenenOgrenciler.push(student);
}

button.addEventListener("click", addItems)
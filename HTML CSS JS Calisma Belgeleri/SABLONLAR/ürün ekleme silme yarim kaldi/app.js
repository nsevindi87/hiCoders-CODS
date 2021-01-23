document.querySelector("#urunForm").addEventListener("submit", function (e) {

    const urunAdi = document.querySelector("#urunAdi").nodeValue;
    const urunModeli = document.querySelector("#urunModel").nodeValue;
    const urunFiyati = document.querySelector("#urunFiyat").nodeValue;

    const urunlerim = new urunler(urunAdi, urunModeli, urunFiyati);
    const ui = new UI();

    ui.urunEkle(urunlerim);




    e.preventDefault();
})

function urunler(urunAdi, urunModeli, urunFiyati) {
    this.urunAdi = urunAdi;
    this.urunModeli = urunModeli;
    this.urunFiyati = urunFiyati;
}

function UI() {}

UI.prototype.urunEkle = function (urunlerim) {
    const list = document.querySelector(".urunListesi");

    const uller = document.createElement("ul");
    uller.innerHTML = `<li>${urunlerim.urunAdi}</li><li>${urunlerim.urunModeli}</li><li>${urunlerim.urunFiyati}</li><li class="sil">X</li>`;
    list.appendChild(uller);
}
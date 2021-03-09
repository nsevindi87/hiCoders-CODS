document.querySelector("#ogrenci-container").innerHTML = listeContainer(eklenenOgrenciler);

function listeContainer(pList) {
    return `
    <table>
        ${listeBaslik()}
        <tbody id="eklenenOgrencilerBody>
        ${elemanEkle(pList)}​
        <tbody>
    </table>`;
}

function listeBaslik() {
    return `
    <thead>
        <tr>
            <th> Ad </th> 
            <th> Soyad </th>    
            <th> Yas </th>
            <th> </th> 
        </tr> 
    </thead>
    `;
}


let listeOlusturma = document.querySelector("#eklenenOgrencilerBody");

function elemanEkle(pListe) {
    return pListe.map((element, index) => {
        listeOlusturma.innerHTML += ` 
        <tr>
            <td> ${index}</th>
            <td> ${element.ogrenciAdi} </td> 
            <td> ${element.ogrenciSoyadi} </td>
            <td> ${element.ogrenciYasi} </td> 
            <td> SIL </td> 
        </tr>
    `
    }).join("");
}


button.addEventListener("click", () => {
    if (ogrenciAdi.value != "" && ogrenciSoyadi.value != "" && ogrenciYasi.value != "") {
        girilenOgrenciKaydi();
        arrayeKaydiGonder();
        elemanEkle();
    } else {
        alert("Bilgileri Doğru Giriniz...")
    }
});
document.querySelector("#ogrenci-container").innerHTML = listeContainer(eklenenOgrenciler);

function listeContainer(pList) {
    return `
    <table>
        ${listeBaslik()}
        ${elemanekle(pList)}​
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

function elemanekle(pListe) {
    return pListe.map((element, index) => ` 
    <tbody>
        <tr>
            <td>geliyor</td>
            <td> ${index}</th>
            <td> ${element.ogrenciAdi} </td> 
            <td> ${element.ogrenciSoyadi} </td>
            <td> ${element.ogrenciYasi} </td> 
            <td> SIL </td> 
        </tr>
    <tbody>
    `);
}

let liste = document.querySelector("#eklenenOgrencilerBody")

liste.innerHTML = elemanEkle(eklenenOgrenciler);
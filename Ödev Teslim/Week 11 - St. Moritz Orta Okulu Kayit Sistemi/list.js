document.querySelector("#ogrenci-container").innerHTML = listeCOntainer();


function listeCOntainer() {
    return `
        <table>
        ${listeBaslik}
        ${elemanekle}
        </table>
    `;
}

function listeBaslik() {
    return `
    <tr >
        <th > Ad < /th> 
        <th > Soyad < /th> 
        <th > Yas < /th>
        <th > </th> 
    </tr> 
    `;
}

function elemanekle(pListe) {
    pListe.map((element, index) => {
        return ` 
    <tr>   
        <td> ${element.ogrenciAdi} </td> 
        <td> ${element.ogrenciSoyadi} </td>
        <td> ${element.ogrenciYasi} </td> 
        <td> SILLLL </td> 
    </tr>`
    });
}
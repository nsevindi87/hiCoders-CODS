document.querySelector("#ogrenci-container").innerHTML = listeCOntainer(eklenenOgrenciler);

function listeCOntainer(pList) {
    return `
        <table>
            ${listeBaslik}
            ${elemanekle(pList)}
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
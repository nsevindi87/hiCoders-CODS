function addRow(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let age = document.getElementById('age').value;

    let table =document.getElementsByTagName('table')[0]; //bu ne ise yarar tam olarak ögrenmeye calis. Birinci table secildi

    let newRow = table.insertRow(table.rows.length);     //Yeni satir  eklenir -  0=en üste gelir  - table.rows.length/2+1 ortaya gelir

    let cel1 = newRow.insertCell(0);                     //Satira yeni hücre eklenir
    let cel2 = newRow.insertCell(1);
    let cel3 = newRow.insertCell(2);

    cel1.innerHTML=fname;                                 //hücrenin icine de daha önce aldigimiz deger yazdirilir
    cel2.innerHTML=lname;
    cel3.innerHTML=age;
}
//model  
const personList =[];

//controller
document.querySelector("#btn-add-user").addEventListener("click", addUser);//1 - ekle butonuna tiklama ve sonrasinda olacak olanlar burada basliyor. Baglanti kuruyoruz

function addUser(){
    let person = getPerson() //2- selektorler ile baglanti kurup degerlerini degiskene atadik.
    addPersonToList(person)  //3- atadigimiz degiskeni ilk personListe push ladik.

     //render
     renderUI(personList);  //resultin icine olusturdugumuz tabloyu koyuyoruz.
};

//1
function getPerson(){
    let firstname= document.querySelector("#first-name").value;
    let lastname= document.querySelector("#last-name").value;
    let age= document.querySelector("#age").value;

    return {
        firstname,lastname,age
    }
};

//2
function addPersonToList(pPerson){
    personList.push(pPerson);
}

//3
function renderUI(pList){
    document.querySelector("#result").innerHTML= createTable(pList);
}

//4
function createTable(pList){
    let table =`
    <table border=1>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
        </tr>
        ${createPersonRows(pList)}
    </table>
    `
    return table;
}

//5
function createPersonRows (pList){
    let personRows =
            personList?.map(person => `
                <tr>
                    <td>${person.firstname}</td>
                    <td>${person.lastname}</td>
                    <td>${person.age}</td>
                </tr>
            `).join("");
    return personRows;
}


renderUI(); // bununla tablonun basliklari cagriliyor. ILK CAGRILAN
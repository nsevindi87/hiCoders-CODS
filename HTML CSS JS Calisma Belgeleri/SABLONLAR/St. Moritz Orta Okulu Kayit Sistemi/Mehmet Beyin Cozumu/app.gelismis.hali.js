//model  
const personList =[];

//controller
document.querySelector("#btn-add-user").addEventListener("click", addUser);//1 - ekle butonuna tiklama ve sonrasinda olacak olanlar burada basliyor. Baglanti kuruyoruz

function addUser(pEvent){
    pEvent.preventDefault();
    let person = getPerson(); //2- selektorler ile baglanti kurup degerlerini degiskene atadik.
    addPersonToList(person);  //3- atadigimiz degiskeni ilk personListe push ladik.
    validatePerson(person);

     //render
     renderUI(personList);  //resultin icine olusturdugumuz tabloyu koyuyoruz.
};

//1
function getPerson(){
    let firstname= document.querySelector("#first-name").value;
    let lastname= document.querySelector("#last-name").value;
    let age= document.querySelector("#age").value;

    return {
        firstname: firstname,           //object olarak aldik
        lastname: lastname,
        age: age               
    }
};

//2
function addPersonToList(pPerson){
    personList.push(pPerson);                   //object olarak listeye gönderdik

}
function getPersonTotal(pList){
    return pList?.length;
}

function validatePerson (pPerson){
    if(pPerson.firstname===""
      ||pPerson.lastname===""
      ||pPerson.age===""){
          throw new Error ("Girilen degerler eksik!");
      }
    if(isNaN(pPerson.age)){
        throw new Error("Yas degeri bir sayi olmali");
    }
}


//3
function renderUI(pList=[]){
    document.querySelector("#result").innerHTML= createTable(pList);
}

                                                        //createPersonRows foksiyonu ==> createTable'ya bunu da ==> renderUI icine gömdük ve UI'yi cagirdik.
//4
function createTable(pList){                           // Tabloyu olusturmak ve altina yeni satirlar eklenebilmesini sagladik.
    let table =`                                       
    <table border=1>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
        </tr>
        ${createPersonRows(pList)}
        <tr>
            <td colspan=3>
            ${getPersonTotal(pList)}
            <td>
        </tr>
    </table>
    `
    return table;
}

//5
function createPersonRows (pList){                     //Listeyi map e sokup istedigimiz bilgileri string olarak alma fonksiyonu
    let personRows =                                   // ? soru isareti map e gönderilen lsitenin ici bos oldugunda hata vermemesini sagliyor.
            personList?.map(person => `                
                <tr>
                    <td>${person.firstname}</td>
                    <td>${person.lastname}</td>
                    <td>${person.age}</td>
                </tr>
            `).join("");                                // string olarak yazilmasini sagliyor.
    return personRows;
}

renderUI(); // bununla tablonun basliklari cagriliyor. ILK CAGRILAN
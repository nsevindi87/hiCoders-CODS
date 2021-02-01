//model  
const personList =[];

//controller
document.querySelector("#btn-add-user").addEventListener("click", addUser);

function addUser(){
    let person = getPerson()
    addPersonToList(person)

     //render
     renderUI(personList);
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

//4
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

//5
function renderUI(pList){
    document.querySelector("#result").innerHTML= createTable(pList);
}


renderUI(); // bununla tablonun basliklari cagriliyor.
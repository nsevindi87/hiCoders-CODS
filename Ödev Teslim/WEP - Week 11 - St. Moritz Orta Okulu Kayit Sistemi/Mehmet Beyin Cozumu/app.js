//model  
const personList =[];

//controller
document.querySelector("#btn-add-user").addEventListener("click", addUser);

function addUser(){
    let firstname= document.querySelector("#first-name").value;
    let lastname= document.querySelector("#last-name").value;
    let age= document.querySelector("#age").value;

    personList.push({firstname,lastname,age});

    let personRows =
        personList.map(person => `
            <tr>
                <td>${person.firstname}</td>
                <td>${person.lastname}</td>
                <td>${person.age}</td>
            </tr>
        `).join("");

    let table =`
    <table border=1>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
        </tr>
        ${personRows}
    </table>
    `
    
     //render
     document.querySelector("#result").innerHTML= table;
};
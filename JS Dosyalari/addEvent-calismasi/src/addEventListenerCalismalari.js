/**
 * 
 */

let counter = 0;

document.querySelector("#btn-increase").addEventListener("click", clickEventHandler);

function clickEventHandler(pEvent) {
    counter++;
    createTable(counter);
    document.querySelector("#main-container").innerHTML = htmlFragment;
};


function createTable(pCounter) {
    let htmlFragment = `
    <table border=1>
        <tr>
            <th>number<th>
        </tr>
        <tr>
            <td>${counter}<td>
        </tr>
        <tr>
            <td>toplam<td>
        </tr>
    `
    return htmlFragment
}


//ya click eventten sonra fonksiyon yazili
/* let counter = 0;

document.querySelector("#btn-increase")
    .addEventListener("click", function (pEvent) {
        counter++;
        let html = `
        <table border=1>
            <tr>
                <th>number<th>
            </tr>
            <tr>
                <td>${counter}<td>
            </tr>
            <tr>
                <td>${pEvent.target.id}<td>
            </tr>
        `
        document.querySelector("#main-container").innerHTML = html
    }); */


//Veya foksiyon disarda tanimlanip iceriye aktarilir.
/* 
let counter = 0;
document.querySelector("#btn-increase")
    .addEventListener("click", clickEventHandler)

function clickEventHandler(pEvent) {
    counter++;
    let htmlFragment = `
    <table border=1>
        <tr>
            <th>number<th>
        </tr>
        <tr>
            <td>${counter}<td>
        </tr>
        <tr>
            <td>${pEvent.target.id}<td>
        </tr>
    `
    document.querySelector("#main-container").innerHTML = htmlFragment
} */


//disaridan parametre alacak sekilde click event ekleme 1.YONTEM
/* 
let counter = {
    count: 5
};

document.querySelector("#btn-increase")
    .addEventListener("click", clickEventHandler.bind(null, counter));

function clickEventHandler(pCounter, pEvent) {
    pCounter.count++;
    let htmlFragment = `
    <table border=1>
        <tr>
            <th>number<th>
        </tr>
        <tr>
            <td>${pCounter.count}<td>
        </tr>
        <tr>
            <td>${pEvent}<td>
        </tr>
    `;
    document.querySelector("#main-container").innerHTML = htmlFragment;
} */

//disaridan parametre alacak sekilde click event ekleme 2.YONTEM
/* let counter = 5;

document.querySelector("#btn-increase")
    .addEventListener("click", saydirma(counter));

function saydirma(pCounter) {
    return function clickEventHandler(pEvent) {
        let htmlFragment = `
        <table border=1>
            <tr>
                <th>number<th>
            </tr>
            <tr>
                <td>${pCounter++}<td>
            </tr>
            <tr>
                <td>${pEvent}<td>
            </tr>
        `;
        document.querySelector("#main-container").innerHTML = htmlFragment;
    }
} */
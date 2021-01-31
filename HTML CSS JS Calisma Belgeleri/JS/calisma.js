/**
 * 
 */

let counter = 0;

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
    })
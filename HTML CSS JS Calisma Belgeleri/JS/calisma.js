/**
 * 
 */

let counter = 0;

document.querySelector("#btn-increase")
    .addEventListener("click", function () {
        counter++;
        let html = `
        <table>
            <tr>
                <th>number<th>
            </tr>
            <tr>
                <td>${counter}<td>
            </tr>

        `



        document.querySelector("#main-container").innerHTML = html
    })
//model
let counter = 0;
let timezone = "Europa/Zurich";

setInterval(function () {
    clickEventHandler();
}, 1000);

document.querySelector("#slc-timeZone").addEventListener("change", function (pEvent) {
    timezone = pEvent.target.value;
});

//controller
function clickEventHandler() {
    let currentTime = new Date(new Date().toLocaleString(`ch-DE`, {timeZone: timezone}));
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let html = createTable(hours, minutes, seconds);
    document.querySelector("#main-container").innerHTML = html;
};

//UI
function createTable(pHour, pMinute, pSeconds) {
    let htmlFragment = `
    <table border=1>
        <tr>
            <td>${String(pHour).padStart(2,`0`)}:</td> 
            <td>${String(pMinute).padStart(2,`0`)}:</td>
            <td>${String(pSeconds).padStart(2,`0`)}<td>
        </tr>
    </table>
    `;
    return htmlFragment
}
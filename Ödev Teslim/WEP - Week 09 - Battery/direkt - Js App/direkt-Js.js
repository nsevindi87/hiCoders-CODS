function createHeader() {
    return `<h1>Battary Prototype</h1>`;
}

function createBattery() {
    return `<section id="battery">
                <div>...</div>
                <div>...</div>
                <div>...</div>
            </section>`;
}

function createLevelInfo() {
    return `<section id="energy-level-info"></section>`;
}

function createButtons() {
    return `<section>
                <button id="increase-handle">+</button> <button id="decrease-handle">-</button>
            </section>`;
}

const mainElement = document.querySelector("#app");
mainElement.innerHTML = createHeader() +
    createBattery() +
    createLevelInfo() +
    createButtons();
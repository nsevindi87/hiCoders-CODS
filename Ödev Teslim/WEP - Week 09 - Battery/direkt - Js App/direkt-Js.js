function createHeader() {
    return `<h1>Battary Prototype</h1>`;
}

function createBattery(pEnergyLevel = 0) {
    return `<section id="battery" class="energy-level-${pEnergyLevel}">
                <div>...</div>
                <div>...</div>
                <div>...</div>
            </section>`;
}

function createLevelInfo(pEnergyLevel = 0) {
    let energyLEvelPercentage = Math.round((pEnergyLevel / 3) * 100);
    return `<section id="energy-level-info">${energyLEvelPercentage}</section>`;
}

function createButtons() {
    return `<section>
                <button id="increase-handle">+</button> <button id="decrease-handle">-</button>
            </section>`;
}


let energyLevel = 0; // max 3

const mainElement = document.querySelector("#app");


mainElement.addEventListener("click", function (pEvent) {
    if (pEvent.target.id === "increase-handle") {
        if (energyLevel < 3) {
            energyLevel++;
        }
    }
    if (pEvent.target.id === "decrease-handle") {
        if (energyLevel > 0) {
            energyLevel--;
        }
    }

    updateUI(energyLevel);
});

function updateUI(pEnergyLevel) {
    mainElement.innerHTML = createHeader() +
        createBattery(pEnergyLevel) +
        createLevelInfo(pEnergyLevel) +
        createButtons();
}

//initialization / ilkleme
updateUI(0);
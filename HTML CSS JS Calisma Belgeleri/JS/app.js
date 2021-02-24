//functions

function updateUi(pEnergyLevel, pBatteryContainer){
    pBatteryContainer.className=`energy-level-${pEnergyLevel}`
    levelInfoElement.innerHTML = Math.round(( energyLevel/3) *100);
}



//data model

let energyLevel = 0;

const azaltmaElement = document.querySelector("#azaltma");
const arttirmaElement = document.querySelector("#arttirma");
const batteryElement = document.querySelector("#battery")
const levelInfoElement = document.querySelector("#enery-level-info")

arttirmaElement.addEventListener("click", function(event){
    if(energyLevel<3){
        energyLevel++
    }

    updateUi(energyLevel,batteryElement,levelInfoElement)
})



azaltmaElement.addEventListener("click", function(event){
    if(energyLevel>0){
    energyLevel--
    }

    updateUi(energyLevel,batteryElement)

});


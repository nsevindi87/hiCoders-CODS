//data model

let energyLevel = 0;

const azaltmaElement = document.querySelector("#azaltma");
const arttirmaElement = document.querySelector("#arttirma");
const batteryElement = document.querySelector("#battery")

arttirmaElement.addEventListener("click", function(event){
    if(energyLevel<3){
        energyLevel++
    }

    if(energyLevel==0){
        batteryElement.className="energy-level-0"
    }else if(energyLevel==1){
        batteryElement.className="energy-level-1"
    }else if(energyLevel==2){
        batteryElement.className="energy-level-2"
    }else if(energyLevel==3){
        batteryElement.className="energy-level-3"
    }
})



azaltmaElement.addEventListener("click", function(event){
    if(energyLevel>0){
    energyLevel--
    }
    
    if(energyLevel==0){
        batteryElement.className="energy-level-0"
    }else if(energyLevel==1){
        batteryElement.className="energy-level-1"
    }else if(energyLevel==2){
        batteryElement.className="energy-level-2"
    }else if(energyLevel==3){
        batteryElement.className="energy-level-3"
    }
});


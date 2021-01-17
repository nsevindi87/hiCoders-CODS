/**
 * Müsteri bizde sarj edilebilir bir pil prototipi istiyor. Sayfa üzerinde, pilin enerji degerini 
 * arttirma ve eksiltme icin iki buton isteniyor. Bu butonlar vesilesi ile pil protitpinin 
 * nasil calisilacagi gösterilecek.
 * 
 * 1) Sayfa üzerine pili temsil eden bir HTML yapisi olusturulacak
 *      1.1) Resim kullanarak yapilabilir.
 *      1.2) Div elemanlari html'e statik olarak yerlestirilir ve CSS classlari kullarak yapilir.
 *      1.3) Pilin durumu tamamen javascript icinde dinamik olarak olusturulur.
 * 2) Ek olarak azaltma ve arttirma butonlari html'e eklenecek
 * 3) Bu butonlara ayri ayri event listener eklenecek
 * 4) Eksiltme butonuna her tiklandiginda (pilin enerjisi bitene kadar) pilin enerjisi birer kademe azaltilacarak gösterilecek
 *      4.1) Azalma esnasinda pilin rengi yesilden kirmiziya dogru kademe kademe degisecek
 * 5) Arttirma butonuna tiklandiginda ilgili event handler (fonksion) yine pilin enerjisni kademe kademe arttiaracak (pil tam olarak dolana kadar)
 *      5.1) Arttirma esnasinda pilin rengi kirmizidan yesile dogru kademe kademe degisecek
 */


 /**
  * Cözüm 1.3
  */

const MAX_LEVEL = 5;

function createHeader(){
  return `<h1>Battery Prototype</h1>`;
}

function createBattery(pEnergyLevel = 0){
  let color = `rgb(${255/MAX_LEVEL * (MAX_LEVEL-pEnergyLevel)}, ${255/MAX_LEVEL * (pEnergyLevel)}, 0)`;
  let divs = `<div>...</div>`.repeat(MAX_LEVEL);
  return `
        <section id="battery" style="background-color:${color}">
            ${divs}
        </section>
  `;
}

function createLevelInfo(pEnergyLevel = 0){
  let energyLevelPercentage = Math.round((pEnergyLevel / MAX_LEVEL) * 100)
  return `<section id="enery-level-info">${energyLevelPercentage}</section>`;
}

function createButtons(){
  return `
    <section>
      <button id="increase-handle">+</button> <button id="decrease-handle">-</button>
    </section>
  `;
}

function updateUI(pEnergyLevel){
  mainElement.innerHTML = createHeader() + 
                          createBattery(pEnergyLevel) +
                          createLevelInfo(pEnergyLevel) +
                          createButtons();
}

// Data model
let energyLevel = 0; 
const mainElement = document.querySelector("#app");

mainElement.addEventListener("click", function(pEvent){
  if(pEvent.target.id === "increase-handle"){
    if(energyLevel < MAX_LEVEL){
      energyLevel++;
    }
  }
  if(pEvent.target.id === "decrease-handle"){
    if(energyLevel > 0){
      energyLevel--;
    }
  }

  updateUI(energyLevel);
});


// initialization/Ilkleme
updateUI(0);
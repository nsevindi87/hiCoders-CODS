/**
 * Müsteri bizden sarj edilebilir bir pil prototipi istiyor
 * Sayfa üzerinde pilin sarjini arttirma ve eksiltme icin iki buton isteniyor.
 * Bu butonlar ile pilin dolumu ve bosaltimi saglanacak
 * 
 * 1) Sayfa üzerine pili temsil eden bir HTML yapisi olusturulacak
 *      1.1 Resim kullanarak yapilabilir
 *      1.2 Div elemanlari ve CSS kullanilarak yapilabilir
 *     *1.3 Pilin durumu tamamen JavaScript icinde dinamik olarak olusturulur. 
 * 
 * 2) Azaltma ve arttirma HTML butonlari eklenecek
 * 
 * 3) Bu butonlara ayri ayri event listener eklenecek
 * 
 * 4) Eksiltme butonuna her tiklandiginda pilin enerjisi bitene kadar birer kadame azaltilacak
 *    4.1 Azalma esnasinda pilin rengi yesilden kirmiziya dogru degisecek
 * 
 * 5) Arttirma butonuna tiklandiginda ilgili event handler (fonksiyon) pilin kademesini dolana kadar birer birer arttiracak. 
 *    5.1 Arttima esnasinda pilin rengi kirmizidan yesile dogru degisecek
 * 
 */

//Functions

function updateUI(pEnergyLevel, pBatteryContainer, pLevelInfo) {
    pBatteryContainer.className = `energy-level-${pEnergyLevel}`;
    pLevelInfo.innerHTML = Math.round((energyLevel / 3) * 100);
}

// Data model
let energyLevel = 0; // max = 3

//DOM API - Event handler - Interactions
const increasingElement = document.querySelector("#increase-handle");
const decreasingElement = document.querySelector("#decrease-handle");
const batteryElement = document.querySelector("#battery");
const levelInfoElement = document.querySelector("#energy-level-info")


//arttirma ve azaltma eylemleri
increasingElement.addEventListener("click", function (eventBilgisi) {
    if (energyLevel < 3) {
        energyLevel++;
    }
    updateUI(energyLevel, batteryElement, levelInfoElement);
});

decreasingElement.addEventListener("click", function (eventBilgisi) {
    if (energyLevel > 0) {
        energyLevel--;
    }
    updateUI(energyLevel, batteryElement, levelInfoElement);
});
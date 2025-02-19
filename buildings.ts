var grill: HTMLAudioElement | null = new Audio("designed-fire-winds-swoosh-04-116788.mp3")
var bun: HTMLAudioElement | null = new Audio("crunch-crispy-breadbun-41340.mp3")
var dad: HTMLAudioElement | null = new Audio("dad-says-yummy-113126.mp3")
var farm: HTMLAudioElement | null = new Audio("zapsplat_impacts_hit_loose_ground_dirt_impact_collapse_fall_013_102682.mp3")
var factory: HTMLAudioElement | null = new Audio("some-kind-of-machine-103152.mp3")
var bank: HTMLAudioElement | null = new Audio("cash-register-purchase-87313.mp3")
var ambience: HTMLAudioElement | null = new Audio("./Hotdog-Clicker-Ambience.m4a")
ambience.loop = true;

var bunBuyable: string = "./Can-Buy-Bun-Button.svg"
var bunUnBuyable: string = "./Cant-Buy-Bun-Button.svg"
var bunBuying: string = "./Buying-Bun-Button.svg"

var dadBuyable: string = "./Can-Buy-Dad-Button.svg"
var dadUnBuyable: string = "./Cant-Buy-Dad-Button.svg"
var dadBuying: string = "./Buying-Dad-Button.svg"

var grillBuyable: string = "./Can-Buy-Grill-Button.svg"
var grillUnBuyable: string = "./Cant-Buy-Grill-Button.svg"
var grillBuying: string = "./Buying-Grill-Button.svg"

var farmBuyable: string = "./Can-Buy-Farm-Button.svg"
var farmUnBuyable: string = "./Cant-Buy-Farm-Button.svg"
var farmBuying: string = "./Buying-Farm-Button.svg"

var facBuyable: string = "./Can-Buy-Fac-Button.svg"
var facUnBuyable: string = "./Cant-Buy-Fac-Button.svg"
var facBuying: string = "./Buying-Fac-Button.svg"

var bankBuyable: string = "./Can-Buy-Bank-Button.svg"
var bankUnBuyable: string = "./Cant-Buy-Bank-Button.svg"
var bankBuying: string = "./Buying-Bank-Button.svg"

let passiveClicks: number = 0;
let clickCount: number = 0;
let bunCount: number = 0;
let dadCount: number = 0;
let grillCount: number = 0;
let dogFarmCount: number = 0;
let facCount: number = 0;
let bankCount: number = 0;

let bunCost: number = 10;
let bunRate: number = 0.2;

let dadCost: number = 100;
let dadRate: number = 2;

let grillCost: number = 500;
let grillRate: number = 10;

let dogFarmCost: number = 5000;
let dogFarmRate: number = 50;

let facCost: number = 50000;
let facRate: number = 500;

let bankCost: number = 250000;
let bankRate: number = 2500;

const increment: number = 1.3;

const passiveClicksElement: HTMLElement | null = document.getElementById("passive");
const clickCountElement: HTMLElement | null = document.getElementById("clickCount");

const grillCountElement: HTMLElement | null = document.getElementById("grillCount");
const bunCountElement: HTMLElement | null = document.getElementById("bunCount");
const dadCountElement: HTMLElement | null = document.getElementById("dadCount");
const dogFarmCountElement: HTMLElement | null = document.getElementById("dogFarmCount");
const facCountElement: HTMLElement | null = document.getElementById("dogFacCount");
const bankCountElement: HTMLElement | null = document.getElementById("dogBankCount");

const hotdogButton: HTMLElement | null = document.getElementById("hotdogButton");
const bunButton: HTMLElement | null = document.getElementById("bunButton");
const dadButton: HTMLElement | null = document.getElementById("dadButton");
const grillButton: HTMLElement | null = document.getElementById("grillButton");
const dogFarmButton: HTMLElement | null = document.getElementById("dogFarmButton");
const facButton: HTMLElement | null = document.getElementById("dogFacButton");
const bankButton: HTMLElement | null = document.getElementById("dogBankButton")

const bunPriceElement: HTMLElement | null = document.getElementById("bunPrice")
const dadPriceElement: HTMLElement | null = document.getElementById("dadPrice")
const grillPriceElement: HTMLElement | null = document.getElementById("grillPrice")
const farmPriceElement: HTMLElement | null = document.getElementById("farmPrice")
const facPriceElement: HTMLElement | null = document.getElementById("facPrice")
const bankPriceElement: HTMLElement | null = document.getElementById("bankPrice")

const bunImage: HTMLImageElement | null = document.getElementById("bunImg") as HTMLImageElement
const dadImage: HTMLImageElement | null = document.getElementById("dadImg") as HTMLImageElement
const grillImage: HTMLImageElement | null = document.getElementById("grillImg") as HTMLImageElement
const farmImage: HTMLImageElement | null = document.getElementById("farmImg") as HTMLImageElement
const facImage: HTMLImageElement | null = document.getElementById("facImg") as HTMLImageElement
const bankImage: HTMLImageElement | null = document.getElementById("bankImg") as HTMLImageElement

const checkBuyables = () => {
    if (clickCount >= bunCost) {
        bunImage.src = bunBuyable
    } else {
        console.log("Cant buy bun; therefore, cant buy anything.")
        bunImage.src = bunUnBuyable
        dadImage.src = dadUnBuyable
        grillImage.src = grillUnBuyable
        farmImage.src = farmUnBuyable
        facImage.src = facUnBuyable
        bankImage.src = bankUnBuyable
        return
    }
    if (clickCount >= dadCost) {
        dadImage.src = dadBuyable
    } else {
        console.log("Cant buy dad; therefore, cant buy anything more expensive than bun.")
        dadImage.src = dadUnBuyable
        grillImage.src = grillUnBuyable
        farmImage.src = farmUnBuyable
        facImage.src = facUnBuyable
        bankImage.src = bankUnBuyable
        return
    }
    if (clickCount >= grillCost) {
        grillImage.src = grillBuyable
    } else {
        console.log("Cant buy grill; therefore, cant buy anything more expensive than dad.")
        grillImage.src = grillUnBuyable
        farmImage.src = farmUnBuyable
        facImage.src = facUnBuyable
        bankImage.src = bankUnBuyable
        return
    }
    if (clickCount >= dogFarmCost) {
        farmImage.src = farmBuyable
    } else {
        console.log("Cant buy farm; therefore, cant buy anything more expensive than grill.")
        farmImage.src = farmUnBuyable
        facImage.src = facUnBuyable
        bankImage.src = bankUnBuyable
        return
    }
    if (clickCount >= facCost) {
        facImage.src = facBuyable
    } else {
        console.log("Cant buy farm; therefore, cant buy anything more expensive than farm.")
        facImage.src = facUnBuyable
        bankImage.src = bankUnBuyable
        return
    }
    if (clickCount >= bankCost) {
        bankImage.src = bankBuyable
    } else {
        console.log("Cant buy bank; therefore, cant buy anything more expensive than fac.")
        bankImage.src = bankUnBuyable
        return
    }
}

hotdogButton?.addEventListener("click", function() {
    if (clickCount == 0.0) {
        ambience?.play()
    }
    if (clickCountElement != null) {
        clickCount++;
        clickCountElement.textContent = clickCount.toFixed(1);
        checkBuyables();
    } else {
        console.log("Could not find clickCountElement")
    }
});

bunButton?.addEventListener("click", function() {
    if (clickCount >= bunCost && bunPriceElement != null && clickCountElement != null && bunCountElement != null && passiveClicksElement != null) {
        clickCount -= bunCost;
        bunCost *= increment;
        checkBuyables();
        bunImage.src = bunBuying
        bunPriceElement.textContent = String(bunCost.toFixed(1));
        clickCountElement.textContent = String(clickCount.toFixed(1));
        bunCount++;
        bunCountElement.textContent = String(bunCount);
        passiveClicks += bunRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        bun?.play();
    }
});
dadButton?.addEventListener("click", function() {
    if (clickCount >= dadCost && dadPriceElement != null && clickCountElement != null && dadCountElement != null && passiveClicksElement != null) {
        clickCount -= dadCost;
        dadCost *= increment;
        checkBuyables();
        dadImage.src = dadBuying
        dadPriceElement.textContent = String(dadCost.toFixed(1));
        clickCountElement.textContent = String(clickCount.toFixed(1));
        dadCount++;
        dadCountElement.textContent = String(dadCount);
        passiveClicks += dadRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        dad?.play();
    }
});
grillButton?.addEventListener("click", function() {
    if (clickCount >= grillCost && grillPriceElement != null && clickCountElement != null && grillCountElement != null && passiveClicksElement != null) {
        clickCount -= grillCost;
        grillCost *= increment;
        checkBuyables();
        grillImage.src = grillBuying
        grillPriceElement.textContent = String(grillCost.toFixed(1));
        clickCountElement.textContent = String(clickCount.toFixed(1));
        grillCount++;
        grillCountElement.textContent = String(grillCount);
        passiveClicks += grillRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        grill?.play();
    }
});
dogFarmButton?.addEventListener("click", function() {
    if (clickCount >= dogFarmCost && farmPriceElement != null && clickCountElement != null && dogFarmCountElement != null && passiveClicksElement != null) {
        clickCount -= dogFarmCost;
        dogFarmCost *= increment;
        checkBuyables();
        farmImage.src = farmBuying
        farmPriceElement.textContent = String(dogFarmCost.toFixed(1));
        clickCountElement.textContent = String(clickCount.toFixed(1));
        dogFarmCount++;
        dogFarmCountElement.textContent = String(dogFarmCount);
        passiveClicks += dogFarmRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        farm?.play();
    }
});
facButton?.addEventListener("click", function() {
    if (clickCount >= facCost && facPriceElement != null && clickCountElement != null && facCountElement != null && passiveClicksElement != null) {
        clickCount -= facCost;
        facCost *= increment;
        checkBuyables();
        facImage.src = facBuying
        facPriceElement.textContent = String(facCost.toFixed(1));
        clickCountElement.textContent = String(clickCount.toFixed(1));
        facCount++;
        facCountElement.textContent = String(facCount.toFixed(1));
        passiveClicks += facRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        factory?.play();
    }
});
bankButton?.addEventListener("click", function() {
    if (clickCount >= bankCost && bankPriceElement != null && clickCountElement != null && bankCountElement != null && passiveClicksElement != null) {
        clickCount -= bankCost;
        bankCost *= increment;
        checkBuyables();
        bankImage.src = bankBuying
        bankPriceElement.textContent = String(bankCost.toFixed(1));
        clickCountElement.textContent = String(clickCount.toFixed(1));
        bankCount++;
        bankCountElement.textContent = String(bankCount.toFixed(1));
        passiveClicks += bankRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        bank?.play();
    }
});

// Upgrades

const mustardCost = 5000;
const tSauceCost = 1000;
const crispCost = 5000;

const tSauceButton = document.getElementById("tSauceButton");
const mustardButton = document.getElementById("mustardButton");
const crispButton = document.getElementById("crispButton");

tSauceButton?.addEventListener("click", function() {
    if (clickCount >= tSauceCost && clickCountElement != null && passiveClicksElement != null) {
        clickCount -= tSauceCost;
        checkBuyables();
        clickCountElement.textContent = clickCount.toFixed(1);
        tSauceButton.style.display = "none";
        passiveClicks += 25;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
    }
});

mustardButton?.addEventListener("click", function() {
    if (clickCount >= mustardCost && clickCountElement != null && passiveClicksElement != null) {
        clickCount -= mustardCost;
        checkBuyables();
        clickCountElement.textContent = clickCount.toFixed(1);
        mustardButton.style.display = "none";
        passiveClicks += 50;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
    }
});

crispButton?.addEventListener("click", function() {
    if (clickCount >= crispCost && clickCountElement != null) {
        clickCount -= crispCost;
        checkBuyables();
        clickCountElement.textContent = clickCount.toFixed(1);
        crispButton.style.display = "none";
        bunRate *= 2;
    }
});

setInterval(function() {
    if (clickCountElement != null) {
        clickCount += passiveClicks;
        clickCountElement.textContent = clickCount.toFixed(1);
        checkBuyables();
    }
}, 1000);

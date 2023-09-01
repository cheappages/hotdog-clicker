var grill = new Audio("designed-fire-winds-swoosh-04-116788.mp3")
var bun = new Audio("crunch-crispy-breadbun-41340.mp3")
var dad = new Audio("dad-says-yummy-113126.mp3")
var farm = new Audio("zapsplat_impacts_hit_loose_ground_dirt_impact_collapse_fall_013_102682.mp3")
var factory = new Audio("some-kind-of-machine-103152.mp3")
var bank = new Audio("cash-register-purchase-87313.mp3")
let passiveClicks = 0;
let clickCount = 0;
let bunCount = 0;
let dadCount = 0;
let grillCount = 0;
let dogFarmCount = 0;
let facCount = 0;
let bankCount = 0;
let bunCost = 10;
let bunRate = 0.2;
let dadCost = 100;
let dadRate = 2;
let grillCost = 500;
let grillRate = 10;
let dogFarmCost = 5000;
let dogFarmRate = 50;
let facCost = 50000;
let facRate = 500;
let bankCost = 250000;
let bankRate = 2500;
const increment = 1.3;
const clickCountElement = document.getElementById("clickCount");
const grillCountElement = document.getElementById("grillCount");
const passiveClicksElement = document.getElementById("passive");
const bunCountElement = document.getElementById("bunCount");
const dadCountElement = document.getElementById("dadCount");
const dogFarmCountElement = document.getElementById("dogFarmCount");
const facCountElement = document.getElementById("dogFacCount");
const bankCountElement = document.getElementById("dogBankCount")
const hotdogButton = document.getElementById("hotdogButton");
const bunButton = document.getElementById("bunButton");
const dadButton = document.getElementById("dadButton");
const grillButton = document.getElementById("grillButton");
const dogFarmButton = document.getElementById("dogFarmButton");
const facButton = document.getElementById("dogFacButton");
const bankButton = document.getElementById("dogBankButton")
const bunPriceElement = document.getElementById("bunPrice")
const dadPriceElement = document.getElementById("dadPrice")
const grillPriceElement = document.getElementById("grillPrice")
const farmPriceElement = document.getElementById("farmPrice")
const facPriceElement = document.getElementById("facPrice")
const bankPriceElement = document.getElementById("bankPrice")

hotdogButton.addEventListener("click", function() {
    clickCount++;
    clickCountElement.textContent = clickCount.toFixed(1);
});

bunButton.addEventListener("click", function() {
    if (clickCount >= bunCost) {
        clickCount -= bunCost;
        bunCost *= increment;
        bunPriceElement.textContent = bunCost;
        clickCountElement.textContent = clickCount;
        bunCount++;
        bunCountElement.textContent = bunCount;
        passiveClicks += bunRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        bun.play();
    }
});
dadButton.addEventListener("click", function() {
    if (clickCount >= dadCost) {
        clickCount -= dadCost;
        dadCost *= increment;
        dadPriceElement.textContent = dadCost;
        clickCountElement.textContent = clickCount;
        dadCount++;
        dadCountElement.textContent = dadCount;
        passiveClicks += dadRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        dad.play();
    }
});
grillButton.addEventListener("click", function() {
    if (clickCount >= grillCost) {
        clickCount -= grillCost;
        grillCost *= increment;
        grillPriceElement.textContent = grillCost;
        clickCountElement.textContent = clickCount;
        grillCount++;
        grillCountElement.textContent = grillCount;
        passiveClicks += grillRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        grill.play();
    }
});
dogFarmButton.addEventListener("click", function() {
    if (clickCount >= dogFarmCost) {
        clickCount -= dogFarmCost;
        dogFarmCost *= increment;
        farmPriceElement.textContent = dogFarmCost;
        clickCountElement.textContent = clickCount;
        dogFarmCount++;
        dogFarmCountElement.textContent = dogFarmCount;
        passiveClicks += dogFarmRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        farm.play();
    }
});
facButton.addEventListener("click", function() {
    if (clickCount >= facCost) {
        clickCount -= facCost;
        facCost *= increment;
        facPriceElement.textContent = facCost;
        clickCountElement.textContent = clickCount;
        facCount++;
        facCountElement.textContent = facCount;
        passiveClicks += facRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        factory.play();
    }
});
bankButton.addEventListener("click", function() {
    if (clickCount >= bankCost) {
        clickCount -= bankCost;
        bankCost *= increment;
        bankPriceElement.textContent = bankCost;
        clickCountElement.textContent = clickCount;
        bankCount++;
        bankCountElement.textContent = bankCount;
        passiveClicks += bankRate;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
        bank.play();
    }
});

// Upgrades

const mustardCost = 5000;
const tSauceCost = 1000;
const crispCost = 5000;
const tSauceButton = document.getElementById("tSauceButton");
const mustardButton = document.getElementById("mustardButton");
const crispButton = document.getElementById("crispButton");

tSauceButton.addEventListener("click", function() {
    if (clickCount >= tSauceCost) {
        clickCount -= tSauceCost;
        clickCountElement.textContent = clickCount.toFixed(1);
        tSauceButton.style.display = "none";
        passiveClicks += 25;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
    }
});

mustardButton.addEventListener("click", function() {
    if (clickCount >= mustardCost) {
        clickCount -= mustardCost;
        clickCountElement.textContent = clickCount.toFixed(1);
        mustardButton.style.display = "none";
        passiveClicks += 50;
        passiveClicksElement.textContent = passiveClicks.toFixed(1);
    }
});

crispButton.addEventListener("click", function() {
    if (clickCount >= crispCost) {
        clickCount -= crispCost;
        clickCountElement.textContent = clickCount.toFixed(1);
        crispButton.style.display = "none";
        bunRate *= 2;
    }
});

const save = () => {
    sessionStorage.setItem("Clicks", clickCount)
    sessionStorage.setItem("Passive", passiveClicks)
    sessionStorage.setItem("Buns", bunCount)
    sessionStorage.setItem("Dads", dadCount)
    sessionStorage.setItem("Grills", grillCount)
    sessionStorage.setItem("Farms", dogFarmCount)
    sessionStorage.setItem("Factories", facCount)
    sessionStorage.setItem("Banks", bankCount)
}

window.addEventListener("beforeunload", () => {
    alert("Saving the game...")
    save();
});

const getS = key => {
    return sessionStorage.getItem(key)
}

const load = () => {
    Number(getS("Clicks")) != NaN ? clickCount = Number(getS("Clicks")) : console.log("Not A Number");
    Number(getS("Passive")) != NaN ? passiveClicks = Number(getS("Passive")) : console.log("Not A Number");
    Number(getS("Buns")) != NaN ? bunCount = Number(getS("Buns")) : console.log("Not A Number");
    Number(getS("Dads")) != NaN ? dadCount = Number(getS("Dads")) : console.log("Not A Number");
    Number(getS("Grills")) != NaN ? grillCount = Number(getS("Grills")) : console.log("Not A Number");
    Number(getS("Farms")) != NaN ? farmCount = Number(getS("Farms")) : console.log("Not A Number");
    Number(getS("Factories")) != NaN ? facCount = Number(getS("Factories")) : console.log("Not A Number");
    Number(getS("Banks")) != NaN ? bankCount = Number(getS("Banks")) : console.log("Not A Number");

    clickCountElement.textContent = clickCount
    passiveCountElement.textContent = passiveClicks
    bunCountElement.textContent = bunCount
    dadCountElement.textContent = dadCount
    grillCountElement.textContent = grillCount
    dogFarmCountElement.textContent = dogFarmCount
    facCountElement.textContent = facCount
    bankCountElement.textContent = bankCount
}

load()

setInterval(function() {
    clickCount += passive;
    clickCountElement.textContent = clickCount.toFixed(1);
}, 1000);

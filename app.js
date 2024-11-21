//Unit Counter

var gold = 0
var peasantAmount = 0
var knightAmount = 0
var calvaryAmount = 0
var lancerAmount = 0
var templarAmount = 0
var gaurdAmount = 0
var wingedAmount = 0
var dukeAmount = 0
var kingAmount = 0

//Buttons

const castle = document.getElementById("theCastle")
const peasant = document.getElementById("peasant")
const knight = document.getElementById("knight")
const calvary = document.getElementById("calvary")
const lancer = document.getElementById("lancer")
const templar = document.getElementById("templar")
const gaurd = document.getElementById("gaurd")
const winged = document.getElementById("winged")
const duke = document.getElementById("duke")
const king = document.getElementById("king")

//Update unit counts

const score = document.getElementById("score")
const peasantNumber = document.getElementById("peasantNumber")
const knightNumber = document.getElementById("knightNumber")
const calvaryNumber = document.getElementById("calvaryNumber")
const lancerNumber = document.getElementById("lancerNumber")
const templarNumber = document.getElementById("templarNumber")
const gaurdNumber = document.getElementById("gaurdNumber")
const wingedNumber = document.getElementById("wingedNumber")
const dukeNumber = document.getElementById("dukeNumber")
const kingNumber = document.getElementById("kingNumber")

//Multiplier Upgrades

var multiplierOne = 0
var multiplierTwo = 0
var multiplierThree = 0
var updateOneCost = 1000
var updateTwoCost = 10000
var updateThreeCost = 100000
var outcomeMultiplierOne = 0
var outcomeMultiplierTwo = 0
var outcomeMultiplierThree = 0
var theMultipliers = 0
const updateOne = document.getElementById("one")
const updateTwo = document.getElementById("two")
const updateThree = document.getElementById("three")
const OneCostText = document.getElementById("OneCostText")
const TwoCostText = document.getElementById("TwoCostText")
const ThreeCostText = document.getElementById("ThreeCostText")

//Castle Button

function castleScore() {
    gold += 1
    score.textContent = gold
}

//Multiplier Upgrades

var isUpgradeOne = false
var isUpgradeTwo = false
var isUpgradeThree = false

function castleUpgrader() {
    const castleImage = document.getElementById("theCastleImage");
    const title = document.getElementById("title")
    if (isUpgradeOne && !isUpgradeTwo && !isUpgradeThree) {
        castleImage.src = "./images/Castle1Upgrade.png";
        castleImage.style.width = "300px"; 
        castleImage.style.height = "400px"; 
        title.style.top = "400px"
    } else if (isUpgradeTwo && !isUpgradeThree) {
        castleImage.src = "./images/Castle2Upgrade.png";
        castleImage.style.width = "500px"; 
        castleImage.style.height = "400px";
        title.style.top = "400px" 
    } else if (isUpgradeThree) {
        castleImage.src = "./images/Castle3Upgrade.png";
        castleImage.style.width = "500px"; 
        castleImage.style.height = "400px";
        title.style.top = "400px" 
    } else {
        castleImage.src = "./images/castle.png";
    }
}


function updateMultiplierOne() {
    if (gold >= updateOneCost){
        multiplierOne += 1
        gold -= updateOneCost
        score.textContent = gold
        updateOneCost = updateOneCost * 2
        OneCostText.textContent = updateOneCost
        outcomeMultiplierOne = multiplierOne * 2;
        isUpgradeOne = true
        allMultipliers()
        castleUpgrader()
    }
}

function updateMultiplierTwo() {
    if (gold >= updateTwoCost){
        multiplierTwo += 1
        gold -= updateTwoCost
        score.textContent = gold
        updateTwoCost = updateTwoCost * 2
        TwoCostText.textContent = updateTwoCost
        outcomeMultiplierTwo = multiplierTwo * 5;
        isUpgradeTwo = true
        allMultipliers()
        castleUpgrader()
    }
}

function updateMultiplierThree() {
    if (gold >= updateThreeCost){
        multiplierThree += 1
        gold -= updateThreeCost
        score.textContent = gold
        updateThreeCost = updateThreeCost * 2
        ThreeCostText.textContent = updateThreeCost
        outcomeMultiplierThree = multiplierThree * 10;
        isUpgradeThree = true
        allMultipliers()
        castleUpgrader()
    }
}

function allMultipliers() {
    if (outcomeMultiplierOne == 0 && outcomeMultiplierTwo == 0 && outcomeMultiplierThree == 0) {
        theMultipliers = 1
    } else {
        theMultipliers = outcomeMultiplierOne + outcomeMultiplierTwo + outcomeMultiplierThree
    }
}

//Purchasing Units

function buyPeasant() {
    if (gold >= 50) {
        gold -= 50
        score.textContent = gold 
        peasantAmount += 1
        peasantNumber.textContent = peasantAmount
    }
}

function buyKnight() {
    if (gold >= 300) {
        gold -= 300
        score.textContent = gold 
        knightAmount += 1
        knightNumber.textContent = knightAmount
    }
}

function buyCalvary() {
    if (gold >= 1000) {
        gold -= 1000
        score.textContent = gold 
        calvaryAmount += 1
        calvaryNumber.textContent = calvaryAmount
    }
}

function buyLancer() {
    if (gold >= 1500) {
        gold -= 1500
        score.textContent = gold 
        lancerAmount += 1
        lancerNumber.textContent = lancerAmount
    }
}

function buyTemplar() {
    if (gold >= 2500) {
        gold -= 2500
        score.textContent = gold 
        templarAmount += 1
        templarNumber.textContent = templarAmount
    }
}

function buyGaurd() {
    if (gold >= 4000) {
        gold -= 4000
        score.textContent = gold 
        gaurdAmount += 1
        gaurdNumber.textContent = gaurdAmount
    }
}

function buyWinged() {
    if (gold >= 10000) {
        gold -= 10000
        score.textContent = gold 
        wingedAmount += 1
        wingedNumber.textContent = wingedAmount
    }
}

function buyDuke() {
    if (gold >= 25000) {
        gold -= 25000
        score.textContent = gold 
        dukeAmount += 1
        dukeNumber.textContent = dukeAmount
    }
}

function buyKing() {
    if (gold >= 70000) {
        gold -= 70000
        score.textContent = gold 
        kingAmount += 1
        kingNumber.textContent = kingAmount
    }
}

//Unit Currency Generation

function peasantGeneration() {
    setInterval(() => {
        if (peasantAmount > 0) {
            const multiplier = 1 * theMultipliers
            gold += peasantAmount * multiplier;
            score.textContent = gold;
        }
    }, 1000);
}

function knightGeneration() {
    setInterval(() => {
        if (knightAmount > 0) {
            const multiplier = 10 * theMultipliers
            gold += knightAmount * multiplier;
            score.textContent = gold;
        }
    }, 1000);
}

function calvaryGeneration() {
    setInterval(() => {
        if (calvaryAmount > 0) {
            const multiplier = 50 * theMultipliers
            gold += calvaryAmount * multiplier;
            score.textContent = gold;
        }
    }, 1000);
}

function lancerGeneration() {
    setInterval(() => {
        if (lancerAmount > 0) {
            const multiplier = 75 * theMultipliers
            gold += lancerAmount * multiplier;
            score.textContent = gold;
        }
    }, 1000);
}

function templarGeneration() {
    setInterval(() => {
        if (templarAmount > 0) {
            const multiplier = 150 * theMultipliers
            gold += templarAmount * multiplier;
            score.textContent = gold;
        }
    }, 1000);
}

function gaurdGeneration() {
    setInterval(() => {
        if (gaurdAmount > 0) {
            const multiplier = 400 * theMultipliers
            gold += gaurdAmount * multiplier;
            score.textContent = gold;
        }
    }, 1000);
}

function wingedGeneration() {
    setInterval(() => {
        if (wingedAmount > 0) {
            const multiplier = 1000 * theMultipliers
            gold += wingedAmount * multiplier;
            score.textContent = gold;
        }
    }, 1000);
}

function dukeGeneration() {
    setInterval(() => {
        if (dukeAmount > 0) {
            const multiplier = 3000 * theMultipliers
            gold += dukeAmount * multiplier;
            score.textContent = gold;
        }
    }, 1000);
}

function kingGeneration() {
    setInterval(() => {
        if (kingAmount > 0) {
            const multiplier = 10000 * theMultipliers
            gold += kingAmount * multiplier;
            score.textContent = gold;
        }
    }, 1000);
}

//Run Multiplier Functions

castleUpgrader()
updateMultiplierOne()
updateMultiplierTwo()
updateMultiplierThree()
allMultipliers()

//Run Unit Functions

peasantGeneration()
knightGeneration()
calvaryGeneration()
lancerGeneration()
templarGeneration()
gaurdGeneration()
wingedGeneration()
dukeGeneration()
kingGeneration()

//Multiplier Functions

updateOne.addEventListener("click", updateMultiplierOne)
updateTwo.addEventListener("click", updateMultiplierTwo)
updateThree.addEventListener("click", updateMultiplierThree)

//Unit Buttons

castle.addEventListener("click", castleScore)
peasant.addEventListener("click", buyPeasant)
knight.addEventListener("click", buyKnight)
calvary.addEventListener("click", buyCalvary)
lancer.addEventListener("click", buyLancer)
templar.addEventListener("click", buyTemplar)
gaurd.addEventListener("click", buyGaurd)
winged.addEventListener("click", buyWinged)
duke.addEventListener("click", buyDuke)
king.addEventListener("click", buyKing)

//CHEATS 
document.addEventListener('keydown', function(event) {
    if (event.key === '!' || event.key === '@') {
        event.preventDefault(); // Prevent default browser behavior
    }
    if (event.key === '!') {
        gold += 1000;
        score.textContent = gold;
    } else if (event.key === 'K') {
        kingAmount += 2000;
        kingNumber.textContent = kingAmount;
    } else if (event.key === 'T') {
        knightAmount += 10
        knightNumber.textContent = knightAmount
    }
});



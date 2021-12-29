let amountEl = document.getElementById('amount-el')
let counts = 0
let increment = 1

let max = {
    twoMax: false,
    fourMax: false,
    mrZomMax: false,
    autoClickerMax: false,
    sixMax: false,
    manyMax: false
}

document.onload = updateScore()

function saveGame() {
    localStorage.setItem('score',counts);
    
}

function updateScore() {
    let updated = Number(localStorage.getItem('score'))
    counts += updated
    amountEl.textContent = `Amount: ${counts}`
}

function clearFunc() {
    if (confirm("WARNING! This will clear all your clicks. Press OK to accept")) {
        localStorage.removeItem('score')
        counts = 0
        amountEl.textContent = `Amount: ${counts}`

    } else {
        console.log("Your score lives another day")
    }
}

function debugMagic() {
    counts += 10000000
}

function clicks() {
    counts += increment
    amountEl.textContent = `Amount: ${counts}`
    saveGame()
}

function shop() {
    console.log(":")
    let shopEl = document.getElementById('shop-el')
    if (shopEl.style.display == "none") {
        shopEl.style.display = "grid"
    } else {
        shopEl.style.display = "none"
    }
}

 function twoTimes() {
     if (counts >= 50 && max.twoMax == false) {
         counts -= 50
         increment *= 2
         amountEl.textContent = `Amount: ${counts}`
         max.twoMax = true
     }
 }

 function fourTimes() {
     if (counts >= 250 && max.fourMax == false) {
         counts -= 250
         increment *= 4
         amountEl.textContent = `Amount: ${counts}`
         max.fourMax = true
     }
}

function mrZom() {
     if (counts >= 150 && max.mrZomMax == false) {
         counts -= 150
         setInterval(clicks, 5000)
         amountEl.textContent = `Amount: ${counts}`
         max.mrZomMax = true
     }
}

function autoClicker() {
    if (counts >= 500 && max.autoClickerMax == false) {
        counts -= 500
        setInterval(clicks, 1000)
        amountEl.textContent = `Amount: ${counts}`
        max.autoClickerMax = true
    }
}

function sixTimes() {
     if (counts >= 700 && max.sixMax == false) {
         counts -= 700
         increment *= 6
         amountEl.textContent = `Amount: ${counts}`
         max.sixMax = true
     }
}

function manyTimes() {
    if (counts >= 10000000 && max.manyMax == false) {
        counts -= 10000000
        increment *= 10000000
        amountEl.textContent = `Amount: ${counts}`
        max.manyMax == true
    }
}


let amountEl = document.getElementById('amount-el')
let counts = 0
let increment = 1
let twoMax = false
let fourMax = false
let mrZomMax = false
let autoClicker = false
let sixMax = false
let manyMax = false

function debugMagic() {
    counts += 100000
}

function clicks() {
    counts += increment
    amountEl.textContent = `Amount: ${counts}`
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
     if (counts >= 100 && twoMax == false) {
         counts -= 100
         increment *= 2
         amountEl.textContent = `Amount: ${counts}`
         twoMax = true
     }
 }

 function fourTimes() {
     if (counts >= 450 && fourMax == false) {
         counts -= 450
         increment *= 4
         amountEl.textContent = `Amount: ${counts}`
         fourMax = true
     }
}

function mrZom() {
     if (counts >= 150 && mrZomMax == false) {
         counts -= 150
         setInterval(clicks, 5000)
         amountEl.textContent = `Amount: ${counts}`
         mrZomMax = true
     }
}

function autoClickerfunc() {
     
}

function sixTimes() {
     
}

function manyTimes() {

}


let amountEl = document.getElementById('amount-el')
let counts = 0
let increment = 1

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

 }

 function fourTimes() {
     
}

function mrZom() {
     
}

function autoClicker() {
     
}

function sixTimes() {
     
}

function manyTimes() {

}
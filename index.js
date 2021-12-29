let amountEl = document.getElementById('amount-el')
let counts = 0

function clicks() {
    counts += 1
    amountEl.textContent = `Amount: ${counts}`
}
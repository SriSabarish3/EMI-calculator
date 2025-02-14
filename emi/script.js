// script.js
document.getElementById('amount').value = 500000;
document.getElementById('months').value = 120;
document.getElementById('interest').value = 10;
document.getElementById('downpayment').value = 50000;

function updateAmountValue(val) {
    document.getElementById('amountValue').innerText = val;
}

function updateMonthsValue(val) {
    document.getElementById('monthsValue').innerText = val;
}

function updateInterestValue(val) {
    document.getElementById('interestValue').innerText = val;
}

function updateDownPaymentValue(val) {
    document.getElementById('downpaymentValue').innerText = val;
}

function calculateEMI() {
    const amount = parseFloat(document.getElementById('amount').value);
    const months = parseInt(document.getElementById('months').value);
    const interestRate = parseFloat(document.getElementById('interest').value) / 12 / 100;
    const downPayment = parseFloat(document.getElementById('downpayment').value);

    const loanAmount = amount - downPayment;
    const emi = (loanAmount * interestRate * Math.pow(1 + interestRate, months)) / (Math.pow(1 + interestRate, months) - 1);

    document.getElementById('emiResult').innerText = emi.toFixed(2);
}


// Initial calculation
calculateEMI();

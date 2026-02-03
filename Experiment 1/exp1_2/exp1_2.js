let balance = 500;

function deposit() {
    let amt = document.getElementById("amount").value;
    amt = Number(amt);

    if (amt <= 0 || isNaN(amt)) {
        showError("Invalid amount!");
        return;
    }

    balance = balance + amt;
    updateBalance();
}

function withdraw() {
    let amt = document.getElementById("amount").value;
    amt = Number(amt);

    if (amt <= 0 || amt > balance || isNaN(amt)) {
        showError("Invalid amount!");
        return;
    }

    balance = balance - amt;
    updateBalance();
}

function updateBalance() {
    document.getElementById("balance").innerHTML =
        "Balance : $" + balance;

    document.getElementById("amountError").innerHTML = "";
}

function showError(msg) {
    document.getElementById("amountError").innerHTML = msg;
}

function addTransaction() {
    let type = document.getElementById("type").value;
    let amount = document.getElementById("amount").value;
    let currentBalance = parseFloat(document.getElementById("currentBalance").innerHTML);
    if (type === "deposit") {
      currentBalance += parseFloat(amount);
    } else {
      currentBalance -= parseFloat(amount);
    }
    document.getElementById("currentBalance").innerHTML = currentBalance.toFixed(2);
  }
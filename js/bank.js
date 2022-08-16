// deposit Amount
document.getElementById("btn-deposit").addEventListener("click", function () {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = +balanceTotal.innerText;
  const depositInput = document.getElementById("deposit-input");
  const depositAmount = +depositInput.value;
  const depositTotal = document.getElementById("deposit-total");
  const previousDepositTotal = +depositTotal.innerText;

  if (depositInput.value === "" || depositInput.value <= 0) {
    alert("Please input value");
    depositInput.value = "";
    return;
  }
  depositInput.value = "";

  depositTotal.innerText = depositAmount + previousDepositTotal;
  balanceTotal.innerText = depositAmount + previousBalanceTotal;
});

// Withdraw Amount
document.getElementById("btn-withdraw").addEventListener("click", function () {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotal = +balanceTotal.innerText;
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawAmount = +withdrawInput.value;

  if (withdrawInput.value === "" || withdrawInput.value <= 0) {
    alert("Please input value");
    withdrawInput.value = "";
    return;
  }
  withdrawInput.value = "";
  if (withdrawAmount > previousBalanceTotal) {
    alert("Insufficient balance");
    return;
  }
  const withdrawTotal = document.getElementById("withdraw-total");
  const previousWithdrawTotal = +withdrawTotal.innerText;

  withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal;
  balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
});

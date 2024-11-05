const priceNumbers = document.querySelectorAll('.priceNum');

aylikOdeme.addEventListener('click', handleMonthlyPayment);

function handleMonthlyPayment() {
  if (aylikOdeme.checked) {
    for (const num of priceNumbers) {
      num.innerHTML = Number((num.innerHTML - 0.09) / 10).toFixed(2);
    }
  } else {
    for (const num of priceNumbers) {
      num.innerHTML = Number((num.innerHTML * 10) + 0.09).toFixed(2);
    }
  }
}
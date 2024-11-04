const priceNumbers = document.querySelectorAll('.priceNum');

aylikOdeme.addEventListener('click', handleMonthlyPayment);

function handleMonthlyPayment() {
  const updatedPrices = [];
  if (aylikOdeme.checked) {
    for (const num of priceNumbers) {
      num.innerHTML = Number((num.innerHTML - 0.09) / 10).toFixed(2);
      updatedPrices.push(num.innerHTML);
    }
  } else {
    for (const num of priceNumbers) {
      num.innerHTML = Number((num.innerHTML * 10) + 0.09).toFixed(2);
      updatedPrices.push(num.innerHTML);
    }
  }

  localStorage.setItem('priceNumbers', JSON.stringify(updatedPrices));
  localStorage.setItem('aylikOdemeChecked', aylikOdeme.checked);
}
const priceNumbers = document.querySelectorAll('.priceNum');

// aylikOdeme id'li switch'e tıklandığında handleMonthlyPayment çalışacak
aylikOdeme.addEventListener('click', handleMonthlyPayment);

function handleMonthlyPayment() {
  if (aylikOdeme.checked) { // aylık ödeme gösterilecekse
    for (const num of priceNumbers) { // tüm fiyatların üzerinde dönüyor
      num.innerHTML = Number((num.innerHTML - 0.09) / 10).toFixed(2);
    }
  } else { // yıllık ödeme gösteriliyorsa
    for (const num of priceNumbers) { // tüm fiyatların üzerinde dönüyor
      num.innerHTML = Number((num.innerHTML * 10) + 0.09).toFixed(2);
    }
  }
}
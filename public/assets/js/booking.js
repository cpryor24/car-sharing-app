document.addEventListener('DOMContentLoaded', () => {
  let rentalTotal = document.querySelector('#total');
  rentalTotal.value = JSON.parse(localStorage.getItem('Total Price'));

  // Added total price for rental
  rentalTotal.textContent = rentalTotal.value;
});

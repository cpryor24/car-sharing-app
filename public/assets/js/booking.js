document.addEventListener('DOMContentLoaded', () => {
  let rentalTotal = document.querySelector('#total');
  let email = document.querySelector('#email');
  let name = document.querySelector('#name');
  let address = document.querySelector('#address');
  let state = document.querySelector('#state');
  let city = document.querySelector('#city');
  let zip = document.querySelector('#zip');
  let from = document.querySelector('#from');
  let fromDate = document.querySelector('.from-date');
  let toDate = document.querySelector('.to-date');
  let to = document.querySelector('#to');
  let days = document.querySelector('.days')
  let price = document.querySelector('#price')
  let book = document.querySelector('#book');

  // form
  book.addEventListener('click', (e) => {
    if(email.value === '' || name.value === '' || address.value === '' ||
      state.value === '' || city.value === '' || zip.value === ''){
        e.preventDefault();
      }
  });

  // LocalStorage Value
  days.value = JSON.parse(localStorage.getItem('Days'));
  rentalTotal.value = JSON.parse(localStorage.getItem('Total Price'));
  price.value = JSON.parse(localStorage.getItem('Total Price'));
  from.value = JSON.parse(localStorage.getItem('From Date'));
  to.value = JSON.parse(localStorage.getItem('To Date'));

  // Added total price for rental
  days.textContent = days.value;
  rentalTotal.textContent = rentalTotal.value;
  fromDate.textContent = from.value;
  toDate.textContent = to.value;

});

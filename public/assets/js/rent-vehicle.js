document.addEventListener('DOMContentLoaded', () => {
  let fromDate = document.querySelector('#fromDate');
  let toDate = document.querySelector('#toDate');
  let checkout = document.querySelector('#checkout');

  // Get date values
  fromDate.value = JSON.parse(localStorage.getItem('From Date'));
  toDate.value = JSON.parse(localStorage.getItem('To Date'));

  // Get date values if user doesn't use search field
  fromDate.addEventListener('blur', () => {
    let from = localStorage.setItem('From Date', JSON.stringify(fromDate.value));
  });

  toDate.addEventListener('blur', () => {
    let to = localStorage.setItem('To Date', JSON.stringify(toDate.value));
  });

  // Form
  checkout.addEventListener('click', (e) => {
    if(fromDate.value === '' || toDate.value === ''){
      e.preventDefault();
    } else {
      let dailyPrice = document.querySelector('#price').textContent;
      // Number of days
      let a = moment(fromDate.value, 'YYYY-MM-DD');
      let b = moment(toDate.value, 'YYYY-MM-DD');
      let days = b.diff(a, 'days');
      getTotalPrice(dailyPrice, days);
    }
  });

  // Set Price for Rental
  let getTotalPrice = (price, days) => {
    fromDate.value = JSON.parse(localStorage.getItem('From Date'));
    toDate.value = JSON.parse(localStorage.getItem('To Date'));
    let rentalPrice = parseInt(price) * days;
    let total = localStorage.setItem('Total Price', JSON.stringify(rentalPrice));
  }

});

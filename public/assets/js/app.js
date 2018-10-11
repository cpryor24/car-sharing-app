document.addEventListener('DOMContentLoaded', function() {
  let fromDate = document.querySelector('#fromDate');
  let toDate = document.querySelector('#toDate');
  let searchBtn = document.querySelector('#searchBtn');

  searchBtn.addEventListener('click', (e) => {
    let from = localStorage.setItem('From Date', JSON.stringify(fromDate.value));
    let to = localStorage.setItem('To Date', JSON.stringify(toDate.value));
  })

});

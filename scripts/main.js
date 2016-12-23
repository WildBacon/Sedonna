var showBtn = document.querySelector('.hotel__button');
var modal = document.querySelector('.modal')

showBtn.addEventListener('click', function(event) {
  event.preventDefault();
  modal.classList.toggle('modal_show');
})
const buyBtns = document.querySelectorAll('.product__order')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

function showBuyProduct() {
  modal.classList.add('open')
}

function hideBuyProduct() {
  modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', showBuyProduct);
}

modalClose.addEventListener('click', hideBuyProduct);
modal.addEventListener('click', hideBuyProduct);
modalContainer.addEventListener('click', (event) => {
  event.stopPropagation()
})
let elements = document.querySelectorAll('.s4__content > div')


const showModal = (e) => {
  e.target.querySelector('.modal').classList.add('active')
}

const closeModal = (e) => {
  e.target.querySelector('.modal').classList.remove('active')
}

for (let elem of elements) {
  elem.addEventListener('mouseenter', (e) => showModal(e))
  elem.addEventListener('mouseleave', (e) => closeModal(e))
}


let elements = document.querySelectorAll('.s4__content > div')
let burger = document.querySelector('.header__burger')
let body = document.querySelector('body')

const showModal = (e) => {
  e.target.querySelector('.modal').classList.add('active')
}

const closeModal = (e) => {
  e.target.querySelector('.modal').classList.remove('active')
}

const toggleBodyOverflow = () => {
  body.classList.toggle('burger')
}

for (let elem of elements) {
  elem.addEventListener('mouseenter', (e) => showModal(e))
  elem.addEventListener('mouseleave', (e) => closeModal(e))
}

burger.addEventListener('click', (e) => toggleBodyOverflow(e))


let check1 = document.querySelector('.s1__button1')
let check2 = document.querySelector('.s1__button2')

check1.addEventListener('click', () => alert(111))
check2.addEventListener('click', () => alert(222))

let hamElems = document.querySelectorAll('.hamburger__item')

hamElems[0].addEventListener('click', () => alert('hoi'))

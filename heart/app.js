const gray = document.querySelector('.gray-heart')
const red = document.querySelector('.red-heart')


gray.addEventListener('click', () => {
    red.classList.add("animation")
    gray.classList.add('fill-color')
})

red.addEventListener('click', () => {
    red.classList.remove("animation")
    gray.classList.remove('fill-color')
})
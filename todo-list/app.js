const form = document.querySelector('form')
let input = document.querySelector('input')
const todos = document.querySelector('.todos')

function getTodo(value) {
    // create new element
    let todo = document.createElement('div')
    let textEl = document.createElement('span')

    // Setting values & Styles
    textEl.innerHTML = value


    // append out element to the DOM
    todo.appendChild(textEl)
    let closeEl = document.createElement('span')
    closeEl.innerHTML = '&times;'
    closeEl.classList.add('delete')

    // Attech Events
    closeEl.addEventListener('click', (e) => {
        todos.removeChild(todo)
    })

    todo.appendChild(closeEl)
    todo.classList.add('todo')
    return todo
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let value = input.value
    if (!value.trim()) return
    todos.appendChild(getTodo(value))
    input.value = ''
})
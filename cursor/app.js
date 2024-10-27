const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', (event) => {
    // event.pageX = across
    // event.pageY = up and down
    console.log('pageX', event.pageX);
    console.log('pageY',event.pageY);

    moveCursor(event.pageX, event.pageY)
})

function moveCursor(pageX, pageY) {
    cursor.style.left = pageX + 'px'
    cursor.style.top = pageY + 'px'
}  
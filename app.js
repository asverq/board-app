const board = document.querySelector('#board')
const colors = ['#c6fc03', '#03fcba', '#03ebfc', '#fc03e3', '#fc035e']
const BOARD_CELLS = 400

for (let i = 0; i < BOARD_CELLS; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)
    const number = `${[i + 1]}`
    square.append(number)
    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', delColor)
}

function setColor(event) {
    item = event.target
    const color = getColor()
    item.style.background = color
    item.style.color = color
    item.style.boxShadow = `0 0 5px ${color}, 0 0 15px ${color}`
}

function delColor(event) {
    item = event.target
    item.style.background = "#1d1d1d"
    item.style.boxShadow = 'none'
    item.style.color = 'inherit'
}

function getColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
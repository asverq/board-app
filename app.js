const board = document.querySelector('#board')
const colors = ['#c6fc03', '#03fcba', '#03ebfc', '#fc03e3', '#fc035e']
const BOARD_CELLS = 400

for (let i = 0; i < BOARD_CELLS; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)
    const number = `${[i + 1]}`
    square.append(number)
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => delColor(square))
}

const setColor = (item) => {
    const color = getColor()
    item.style.background = color
    item.style.color = color
    item.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}`
}

const delColor = (item) => {
    item.style.background = "#1d1d1d"
    item.style.boxShadow = 'none'
    item.style.color = 'inherit'
}

const getColor = () => {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
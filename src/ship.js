const rotateBtn = document.querySelector("#rotate-btn")
const selectionContainer = document.querySelector(".selection-container")

export const Ship = (name, length ) => ({name, length})


let angleShip = 0
function rotate() {
    const selectionShips = Array.from(selectionContainer.children)
    angleShip = angleShip === 0 ? 90 : 0
    selectionShips.forEach((ship) => {
        ship.style.transform =  `rotate(${angleShip}deg)`
    })
}

rotateBtn.addEventListener("click", rotate)


const carrier = Ship("carrier", 5)
const battleship = Ship("battleship", 4)
const cruiser = Ship("cruiser", 3)
const submarine = Ship("submarine", 3)
export const destroyer = Ship("destroyer", 2)

const ships = [carrier, battleship, cruiser, submarine, destroyer]

function checkStart(horizontal, index) {
    if (horizontal) {
        if (index <= 100 - ship.length) {
            return index
        } 
            return 100 - ship.length
        
    }
}

export function addShip(ship) {
    const randomBoolean = Math. random() >= 0.5
    const isHorizontal = randomBoolean 
    const boardCells = document.querySelectorAll("#cpu div")
    const randomStartIndex = Math.floor(Math.random() * 100)
    const shipCells = []

    for (let i = 0; i < ship.length; i++) {
        if (isHorizontal) {
            shipCells.push(boardCells[randomStartIndex + i])
        } else {
            shipCells.push(boardCells[randomStartIndex + i * 10])
        }
    }
    console.log(shipCells)

    shipCells.forEach(cell => {
        cell.classList.add(ship.name)
        cell.classList.add("unavailable")
    })
}

ships.forEach(ship => addShip(ship))
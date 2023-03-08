const rotateBtn = document.querySelector("#rotate-btn")
const selectionContainer = document.querySelector(".selection-container")
let angleShip = 0

function rotate() {
    const selectionShips = Array.from(selectionContainer.children)
    angleShip = angleShip === 0 ? 90 : 0
    selectionShips.forEach((ship) => {
        ship.style.transform =  `rotate(${angleShip}deg)`
    })
}

rotateBtn.addEventListener("click", rotate)

export {}
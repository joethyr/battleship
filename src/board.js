const gameboardContainer = document.querySelector("#gameboard-container")

const width = 10

function createBoard() {
    const board= document.createElement("div")
    board.classList.add("game-board")
    gameboardContainer.append(board)
}


export {createBoard}
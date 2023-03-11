const gameboardContainer = document.querySelector("#gameboard-container")

const width = 10

function createBoard(user) {
    const boardContainer= document.createElement("div")
    const boardHeader = document.createElement("h3")
    const board = document.createElement("div")

    const h3Text= document.createTextNode(`${user}`);
    boardHeader.appendChild(h3Text)

    boardContainer.classList.add("game-board")
    boardContainer.id = user
    
    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement("div")
        cell.classList.add("cell")
        cell.id = `cell-${i}`
        boardContainer.append(cell)
    }

    gameboardContainer.append(board)
    board.append(boardHeader)
    board.append(boardContainer)
}


export {createBoard}
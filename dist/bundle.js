/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBoard": () => (/* binding */ createBoard)
/* harmony export */ });
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




/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship),
/* harmony export */   "addShip": () => (/* binding */ addShip),
/* harmony export */   "destroyer": () => (/* binding */ destroyer)
/* harmony export */ });
const rotateBtn = document.querySelector("#rotate-btn")
const selectionContainer = document.querySelector(".selection-container")

const Ship = (name, length ) => ({name, length})


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
const destroyer = Ship("destroyer", 2)

const ships = [carrier, battleship, cruiser, submarine, destroyer]

function checkStart(horizontal, index) {
    if (horizontal) {
        if (index <= 100 - ship.length) {
            return index
        } 
            return 100 - ship.length
        
    }
}

function addShip(ship) {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/board.js");
 
 

_board__WEBPACK_IMPORTED_MODULE_1__.createBoard("player")
_board__WEBPACK_IMPORTED_MODULE_1__.createBoard("cpu")
;(0,_ship__WEBPACK_IMPORTED_MODULE_0__.addShip)(_ship__WEBPACK_IMPORTED_MODULE_0__.destroyer)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDLEtBQUs7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBLDBCQUEwQixFQUFFO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7QUFFTyxrQ0FBa0MsYUFBYTs7O0FBR3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsVUFBVTtBQUNwRCxLQUFLO0FBQ0w7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOzs7Ozs7VUMxREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOK0M7QUFDZjs7QUFFaEMsK0NBQWlCO0FBQ2pCLCtDQUFpQjtBQUNqQiwrQ0FBTyxDQUFDLDRDQUFTLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dhbWVib2FyZC1jb250YWluZXJcIilcblxuY29uc3Qgd2lkdGggPSAxMFxuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZCh1c2VyKSB7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXI9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBib2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgY29uc3QgaDNUZXh0PSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHt1c2VyfWApO1xuICAgIGJvYXJkSGVhZGVyLmFwcGVuZENoaWxkKGgzVGV4dClcblxuICAgIGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnYW1lLWJvYXJkXCIpXG4gICAgYm9hcmRDb250YWluZXIuaWQgPSB1c2VyXG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTAwOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKVxuICAgICAgICBjZWxsLmlkID0gYGNlbGwtJHtpfWBcbiAgICAgICAgYm9hcmRDb250YWluZXIuYXBwZW5kKGNlbGwpXG4gICAgfVxuXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZChib2FyZClcbiAgICBib2FyZC5hcHBlbmQoYm9hcmRIZWFkZXIpXG4gICAgYm9hcmQuYXBwZW5kKGJvYXJkQ29udGFpbmVyKVxufVxuXG5cbmV4cG9ydCB7Y3JlYXRlQm9hcmR9IiwiY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb3RhdGUtYnRuXCIpXG5jb25zdCBzZWxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGlvbi1jb250YWluZXJcIilcblxuZXhwb3J0IGNvbnN0IFNoaXAgPSAobmFtZSwgbGVuZ3RoICkgPT4gKHtuYW1lLCBsZW5ndGh9KVxuXG5cbmxldCBhbmdsZVNoaXAgPSAwXG5mdW5jdGlvbiByb3RhdGUoKSB7XG4gICAgY29uc3Qgc2VsZWN0aW9uU2hpcHMgPSBBcnJheS5mcm9tKHNlbGVjdGlvbkNvbnRhaW5lci5jaGlsZHJlbilcbiAgICBhbmdsZVNoaXAgPSBhbmdsZVNoaXAgPT09IDAgPyA5MCA6IDBcbiAgICBzZWxlY3Rpb25TaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIHNoaXAuc3R5bGUudHJhbnNmb3JtID0gIGByb3RhdGUoJHthbmdsZVNoaXB9ZGVnKWBcbiAgICB9KVxufVxuXG5yb3RhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvdGF0ZSlcblxuXG5jb25zdCBjYXJyaWVyID0gU2hpcChcImNhcnJpZXJcIiwgNSlcbmNvbnN0IGJhdHRsZXNoaXAgPSBTaGlwKFwiYmF0dGxlc2hpcFwiLCA0KVxuY29uc3QgY3J1aXNlciA9IFNoaXAoXCJjcnVpc2VyXCIsIDMpXG5jb25zdCBzdWJtYXJpbmUgPSBTaGlwKFwic3VibWFyaW5lXCIsIDMpXG5leHBvcnQgY29uc3QgZGVzdHJveWVyID0gU2hpcChcImRlc3Ryb3llclwiLCAyKVxuXG5jb25zdCBzaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBjcnVpc2VyLCBzdWJtYXJpbmUsIGRlc3Ryb3llcl1cblxuZnVuY3Rpb24gY2hlY2tTdGFydChob3Jpem9udGFsLCBpbmRleCkge1xuICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgIGlmIChpbmRleCA8PSAxMDAgLSBzaGlwLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4XG4gICAgICAgIH0gXG4gICAgICAgICAgICByZXR1cm4gMTAwIC0gc2hpcC5sZW5ndGhcbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2hpcChzaGlwKSB7XG4gICAgY29uc3QgcmFuZG9tQm9vbGVhbiA9IE1hdGguIHJhbmRvbSgpID49IDAuNVxuICAgIGNvbnN0IGlzSG9yaXpvbnRhbCA9IHJhbmRvbUJvb2xlYW4gXG4gICAgY29uc3QgYm9hcmRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY3B1IGRpdlwiKVxuICAgIGNvbnN0IHJhbmRvbVN0YXJ0SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApXG4gICAgY29uc3Qgc2hpcENlbGxzID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICBzaGlwQ2VsbHMucHVzaChib2FyZENlbGxzW3JhbmRvbVN0YXJ0SW5kZXggKyBpXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXBDZWxscy5wdXNoKGJvYXJkQ2VsbHNbcmFuZG9tU3RhcnRJbmRleCArIGkgKiAxMF0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coc2hpcENlbGxzKVxuXG4gICAgc2hpcENlbGxzLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChzaGlwLm5hbWUpXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcInVuYXZhaWxhYmxlXCIpXG4gICAgfSlcbn1cblxuc2hpcHMuZm9yRWFjaChzaGlwID0+IGFkZFNoaXAoc2hpcCkpIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1NoaXAsIGFkZFNoaXAsIGRlc3Ryb3llcn0gZnJvbSBcIi4vc2hpcFwiIFxuaW1wb3J0ICogYXMgYm9hcmQgZnJvbSBcIi4vYm9hcmRcIiBcblxuYm9hcmQuY3JlYXRlQm9hcmQoXCJwbGF5ZXJcIilcbmJvYXJkLmNyZWF0ZUJvYXJkKFwiY3B1XCIpXG5hZGRTaGlwKGRlc3Ryb3llcikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
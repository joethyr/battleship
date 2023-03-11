import {Ship, addShip, destroyer} from "./ship" 
import * as board from "./board" 

board.createBoard("player")
board.createBoard("cpu")
addShip(destroyer)
import {initLevel} from './init/level';
import {firstLevelCreator} from './creator/first';

let level = 1;
let isGameOver = false;
let levelWin = false;

function loadLevel() {
    const storageLevel = localStorage.getItem('storageLevel');

    if (storageLevel === '1') {
        firstLevelCreator();
    }
}

initLevel();
loadLevel();


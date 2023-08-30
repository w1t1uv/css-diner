import {initLevel} from './init/init-level';
import {firstLevelCreator} from './creator/first-level-creator';
import {secondLevelCreator} from './creator/second-level-creator';
import {thirdLevelCreator} from './creator/third-level-creator';
import {fourthLevelCreator} from './creator/fourth-level-creator';
import {fifthLevelCreator} from './creator/fifth-level-creator';
import {sixthLevelCreator} from './creator/sixth-level-creator';
import {checkOneLevelWin} from './check/check-one-level-win';
import {seventhLevelCreator} from './creator/seventh-level-creator';

interface ICurrentLevel {
    currentLevel: number;
}

let isGameOver = false;
let levelWin = false;

export const currentLevelObject: ICurrentLevel = {
    currentLevel: 0
};

function loadLevel() {
    const storageLevel = localStorage.getItem('storageLevel');

    if (storageLevel === '1') {
        firstLevelCreator();
    }
    if (storageLevel === '2') {
        secondLevelCreator();
    }
    if (storageLevel === '3') {
        thirdLevelCreator();
    }
    if (storageLevel === '4') {
        fourthLevelCreator();
    }
    if (storageLevel === '5') {
        fifthLevelCreator();
    }
    if (storageLevel === '6') {
        sixthLevelCreator();
    }
    if (storageLevel === '7') {
        seventhLevelCreator();
    }
}

initLevel();
loadLevel();
checkOneLevelWin();


import {initLevel} from './init/init-level';
import {firstLevelCreator} from './creator/first-level-creator';
import {secondLevelCreator} from './creator/second-level-creator';
import {thirdLevelCreator} from './creator/third-level-creator';
import {fourthLevelCreator} from './creator/fourth-level-creator';
import {fifthLevelCreator} from './creator/fifth-level-creator';
import {sixthLevelCreator} from './creator/sixth-level-creator';
import {checkOneLevelWin} from './check/check-one-level-win';
import {seventhLevelCreator} from './creator/seventh-level-creator';
import {eighthLevelCreator} from './creator/eighth-level-creator';
import {ninthLevelCreator} from './creator/ninth-level-creator';
import {tenthLevelCreator} from './creator/tenth-level-creator';
import {checkOneLevelWinVirtualEnter} from './check/check-one-level-win-virtual-enter';
import {promptCall} from './call/prompt-call';

interface ICurrentLevel {
    currentLevel: number;
}

interface IUseTheClue {
    useTheClue: boolean;
}

let isGameOver = false;
let levelWin = false;

export const currentLevelObject: ICurrentLevel = {
    currentLevel: 0
};

export const useTheClueObject: IUseTheClue = {
    useTheClue: false
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
    if (storageLevel === '8') {
        eighthLevelCreator();
    }
    if (storageLevel === '9') {
        ninthLevelCreator();
    }
    if (storageLevel === '10') {
        tenthLevelCreator();
    }
}

initLevel();
loadLevel();
checkOneLevelWin();
checkOneLevelWinVirtualEnter();
promptCall();


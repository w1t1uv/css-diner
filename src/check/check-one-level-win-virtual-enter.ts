import {levels} from '../info/levels';
import {completedLevelsObject, currentLevelObject, useTheClueObject} from '../index';
import {secondLevelCreator} from '../creator/second-level-creator';
import {thirdLevelCreator} from '../creator/third-level-creator';
import {fourthLevelCreator} from '../creator/fourth-level-creator';
import {fifthLevelCreator} from '../creator/fifth-level-creator';
import {sixthLevelCreator} from '../creator/sixth-level-creator';
import {seventhLevelCreator} from '../creator/seventh-level-creator';
import {eighthLevelCreator} from '../creator/eighth-level-creator';
import {ninthLevelCreator} from '../creator/ninth-level-creator';
import {tenthLevelCreator} from '../creator/tenth-level-creator';
import {colorTheCheck} from '../call/color-the-check';
import {winCheck} from './win-check';

export function checkOneLevelWinVirtualEnter() {
    const enterButton = document.querySelector('.enter-button');
    const input = document.querySelector<HTMLInputElement>('.css-input');
    const codeViewWrapper = document.querySelector('.code-view-wrapper');

    if (enterButton && input && codeViewWrapper) {
        enterButton.addEventListener('click', function () {
            if (input.value === levels[currentLevelObject.currentLevel].correctAnswer) {
                if (currentLevelObject.currentLevel === 0) {
                    if (!useTheClueObject.useTheClue) {
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheFirstLevel', 'passed');
                        colorTheCheck();
                        secondLevelCreator();
                        input.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheFirstLevel', 'used clue');
                        colorTheCheck();
                        secondLevelCreator();
                        input.value = '';
                    }
                } else if (currentLevelObject.currentLevel === 1) {
                    if (!useTheClueObject.useTheClue) {
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheSecondLevel', 'passed');
                        colorTheCheck();
                        thirdLevelCreator();
                        input.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheSecondLevel', 'used clue');
                        colorTheCheck();
                        thirdLevelCreator();
                        input.value = '';
                    }
                } else if (currentLevelObject.currentLevel === 2) {
                    if (!useTheClueObject.useTheClue) {
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheThirdLevel', 'passed');
                        colorTheCheck();
                        fourthLevelCreator();
                        input.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheThirdLevel', 'used clue');
                        colorTheCheck();
                        fourthLevelCreator();
                        input.value = '';
                    }
                } else if (currentLevelObject.currentLevel === 3) {
                    if (!useTheClueObject.useTheClue) {
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheFourthLevel', 'passed');
                        colorTheCheck();
                        fifthLevelCreator();
                        input.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheFourthLevel', 'used clue');
                        colorTheCheck();
                        fifthLevelCreator();
                        input.value = '';
                    }
                } else if (currentLevelObject.currentLevel === 4) {
                    if (!useTheClueObject.useTheClue) {
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheFifthLevel', 'passed');
                        colorTheCheck();
                        sixthLevelCreator();
                        input.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheFifthLevel', 'used clue');
                        colorTheCheck();
                        sixthLevelCreator();
                        input.value = '';
                    }
                } else if (currentLevelObject.currentLevel === 5) {
                    if (!useTheClueObject.useTheClue) {
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheSixthLevel', 'passed');
                        colorTheCheck();
                        seventhLevelCreator();
                        input.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheSixthLevel', 'used clue');
                        colorTheCheck();
                        seventhLevelCreator();
                        input.value = '';
                    }
                } else if (currentLevelObject.currentLevel === 6) {
                    if (!useTheClueObject.useTheClue) {
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheSeventhLevel', 'passed');
                        colorTheCheck();
                        eighthLevelCreator();
                        input.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheSeventhLevel', 'used clue');
                        colorTheCheck();
                        eighthLevelCreator();
                        input.value = '';
                    }
                } else if (currentLevelObject.currentLevel === 7) {
                    if (!useTheClueObject.useTheClue) {
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheEighthLevel', 'passed');
                        colorTheCheck();
                        ninthLevelCreator();
                        input.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheEighthLevel', 'used clue');
                        colorTheCheck();
                        ninthLevelCreator();
                        input.value = '';
                    }
                } else if (currentLevelObject.currentLevel === 8) {
                    if (!useTheClueObject.useTheClue) {
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheNinthLevel', 'passed');
                        colorTheCheck();
                        tenthLevelCreator();
                        input.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheNinthLevel', 'used clue');
                        colorTheCheck();
                        tenthLevelCreator();
                        input.value = '';
                    }
                } else if (currentLevelObject.currentLevel === 9) {
                    if (!useTheClueObject.useTheClue) {
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheTenthLevel', 'passed');
                        colorTheCheck();
                        winCheck();
                        input.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        completedLevelsObject.completedLevels++;
                        localStorage.setItem('completedLevels', `${completedLevelsObject.completedLevels}`);
                        localStorage.setItem('passingTheTenthLevel', 'used clue');
                        colorTheCheck();
                        winCheck();
                        input.value = '';
                    }
                }
            } else if (input.value !== levels[currentLevelObject.currentLevel].correctAnswer) {
                codeViewWrapper.classList.toggle('swing');
            }
        });
    }
}
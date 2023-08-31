import {levels} from "../info/levels";
import {currentLevelObject, useTheClueObject} from "../index";
import {secondLevelCreator} from "../creator/second-level-creator";
import {thirdLevelCreator} from "../creator/third-level-creator";
import {fourthLevelCreator} from "../creator/fourth-level-creator";
import {fifthLevelCreator} from "../creator/fifth-level-creator";
import {sixthLevelCreator} from "../creator/sixth-level-creator";
import {seventhLevelCreator} from "../creator/seventh-level-creator";
import {eighthLevelCreator} from "../creator/eighth-level-creator";
import {ninthLevelCreator} from "../creator/ninth-level-creator";
import {tenthLevelCreator} from "../creator/tenth-level-creator";
import {colorTheCheck} from "../call/color-the-check";

export function checkOneLevelWin() {
    const input = document.querySelector<HTMLInputElement>('.css-input');
    const codeViewWrapper = document.querySelector('.code-view-wrapper');

    if (input && codeViewWrapper) {
        input.addEventListener('keydown', function (event) {
            if (event.code === 'Enter' && this.value === levels[currentLevelObject.currentLevel].correctAnswer) {
                if (currentLevelObject.currentLevel === 0) {
                    if (!useTheClueObject.useTheClue) {
                        localStorage.setItem('passingTheFirstLevel', 'passed');
                        colorTheCheck();
                        secondLevelCreator();
                        this.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        localStorage.setItem('passingTheFirstLevel', 'used clue');
                        colorTheCheck();
                        secondLevelCreator();
                        this.value = '';
                    }
                } else if (currentLevelObject.currentLevel === 1) {
                    if (!useTheClueObject.useTheClue) {
                        localStorage.setItem('passingTheSecondLevel', 'passed');
                        colorTheCheck();
                        thirdLevelCreator();
                        this.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        localStorage.setItem('passingTheSecondLevel', 'used clue');
                        colorTheCheck();
                        thirdLevelCreator();
                        this.value = '';
                    }
                } else if (currentLevelObject.currentLevel === 2) {
                    if (!useTheClueObject.useTheClue) {
                        localStorage.setItem('passingTheThirdLevel', 'passed');
                        colorTheCheck();
                        fourthLevelCreator();
                        this.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        localStorage.setItem('passingTheThirdLevel', 'used clue');
                        colorTheCheck();
                        fourthLevelCreator();
                        this.value = '';
                    }
                } else if (currentLevelObject.currentLevel === 3) {
                    if (!useTheClueObject.useTheClue) {
                        localStorage.setItem('passingTheFourthLevel', 'passed');
                        colorTheCheck();
                        fifthLevelCreator();
                        this.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        localStorage.setItem('passingTheFourthLevel', 'used clue');
                        colorTheCheck();
                        fifthLevelCreator();
                        this.value = '';
                    }
                } else if (currentLevelObject.currentLevel === 4) {
                    if (!useTheClueObject.useTheClue) {
                        localStorage.setItem('passingTheFifthLevel', 'passed');
                        colorTheCheck();
                        sixthLevelCreator();
                        this.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        localStorage.setItem('passingTheFifthLevel', 'used clue');
                        colorTheCheck();
                        sixthLevelCreator();
                        this.value = '';
                    }
                } else if (currentLevelObject.currentLevel === 5) {
                    if (!useTheClueObject.useTheClue) {
                        localStorage.setItem('passingTheSixthLevel', 'passed');
                        colorTheCheck();
                        seventhLevelCreator();
                        this.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        localStorage.setItem('passingTheSixthLevel', 'used clue');
                        colorTheCheck();
                        seventhLevelCreator();
                        this.value = '';
                    }
                } else if (currentLevelObject.currentLevel === 6) {
                    if (!useTheClueObject.useTheClue) {
                        localStorage.setItem('passingTheSeventhLevel', 'passed');
                        colorTheCheck();
                        eighthLevelCreator();
                        this.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        localStorage.setItem('passingTheSeventhLevel', 'used clue');
                        colorTheCheck();
                        eighthLevelCreator();
                        this.value = '';
                    }
                } else if (currentLevelObject.currentLevel === 7) {
                    if (!useTheClueObject.useTheClue) {
                        localStorage.setItem('passingTheEighthLevel', 'passed');
                        colorTheCheck();
                        ninthLevelCreator();
                        this.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        localStorage.setItem('passingTheEighthLevel', 'used clue');
                        colorTheCheck();
                        ninthLevelCreator();
                        this.value = '';
                    }
                } else if (currentLevelObject.currentLevel === 8) {
                    if (!useTheClueObject.useTheClue) {
                        localStorage.setItem('passingTheNinthLevel', 'passed');
                        colorTheCheck();
                        tenthLevelCreator();
                        this.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        localStorage.setItem('passingTheNinthLevel', 'used clue');
                        colorTheCheck();
                        tenthLevelCreator();
                        this.value = '';
                    }
                } else if (currentLevelObject.currentLevel === 9) {
                    if (!useTheClueObject.useTheClue) {
                        localStorage.setItem('passingTheTenthLevel', 'passed');
                        colorTheCheck();
                        this.value = '';
                    } else if (useTheClueObject.useTheClue) {
                        useTheClueObject.useTheClue = false;
                        localStorage.setItem('passingTheTenthLevel', 'used clue');
                        colorTheCheck();
                        this.value = '';
                    }
                }
            } else if (event.code === 'Enter' && this.value !== levels[currentLevelObject.currentLevel].correctAnswer) {
                codeViewWrapper.classList.toggle('swing');
            }
        });
    }
}
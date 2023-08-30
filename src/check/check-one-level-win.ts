import {levels} from '../info/levels';
import {currentLevelObject} from '../index';
import {secondLevelCreator} from '../creator/second-level-creator';
import {thirdLevelCreator} from '../creator/third-level-creator';
import {fourthLevelCreator} from '../creator/fourth-level-creator';
import {fifthLevelCreator} from '../creator/fifth-level-creator';
import {sixthLevelCreator} from '../creator/sixth-level-creator';

export function checkOneLevelWin() {
    const input = document.querySelector<HTMLInputElement>('.css-input');

    if (input) {
        input.addEventListener('keydown', function (event) {
            if (event.code === 'Enter' && this.value === levels[currentLevelObject.currentLevel].correctAnswer) {
                if (currentLevelObject.currentLevel === 0) {
                    secondLevelCreator();
                }
                else if (currentLevelObject.currentLevel === 1) {
                    thirdLevelCreator();
                }
                else if (currentLevelObject.currentLevel === 2) {
                    fourthLevelCreator();
                }
                else if (currentLevelObject.currentLevel === 3) {
                    fifthLevelCreator();
                }
                else if (currentLevelObject.currentLevel === 4) {
                    sixthLevelCreator();
                }
                // if (currentLevelObject.currentLevel === 5) {
                //     seventhLevelCreator();
                // }
                // if (currentLevelObject.currentLevel === 6) {
                //     eighthLevelCreator();
                // }
                // if (currentLevelObject.currentLevel === 7) {
                //     ninthLevelCreator();
                // }
                // if (currentLevelObject.currentLevel === 8) {
                //     tenthLevelCreator();
                // }
            }
        });
    }
}
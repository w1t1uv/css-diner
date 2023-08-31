import {levels} from '../info/levels';
import {currentLevelObject} from '../index';
import {secondLevelCreator} from '../creator/second-level-creator';
import {thirdLevelCreator} from '../creator/third-level-creator';
import {fourthLevelCreator} from '../creator/fourth-level-creator';
import {fifthLevelCreator} from '../creator/fifth-level-creator';
import {sixthLevelCreator} from '../creator/sixth-level-creator';
import {seventhLevelCreator} from '../creator/seventh-level-creator';
import {eighthLevelCreator} from '../creator/eighth-level-creator';
import {ninthLevelCreator} from '../creator/ninth-level-creator';
import {tenthLevelCreator} from '../creator/tenth-level-creator';

export function checkOneLevelWin() {
    const input = document.querySelector<HTMLInputElement>('.css-input');

    if (input) {
        input.addEventListener('keydown', function (event) {
            if (event.code === 'Enter' && this.value === levels[currentLevelObject.currentLevel].correctAnswer) {
                if (currentLevelObject.currentLevel === 0) {
                    secondLevelCreator();
                    this.value = '';
                } else if (currentLevelObject.currentLevel === 1) {
                    thirdLevelCreator();
                    this.value = '';
                } else if (currentLevelObject.currentLevel === 2) {
                    fourthLevelCreator();
                    this.value = '';
                } else if (currentLevelObject.currentLevel === 3) {
                    fifthLevelCreator();
                    this.value = '';
                } else if (currentLevelObject.currentLevel === 4) {
                    sixthLevelCreator();
                    this.value = '';
                } else if (currentLevelObject.currentLevel === 5) {
                    seventhLevelCreator();
                    this.value = '';
                } else if (currentLevelObject.currentLevel === 6) {
                    eighthLevelCreator();
                    this.value = '';
                } else if (currentLevelObject.currentLevel === 7) {
                    ninthLevelCreator();
                    this.value = '';
                } else if (currentLevelObject.currentLevel === 8) {
                    tenthLevelCreator();
                    this.value = '';
                }
            }
        });
    }
}
import {levels} from '../info/levels';
import {currentLevelObject} from '../index';
import {secondLevelCreator} from '../creator/second';

export function checkOneLevelWin() {
    const input = document.querySelector<HTMLInputElement>('.css-input');

    if (input) {
        input.addEventListener('keydown', function (event) {
            if (event.code === 'Enter' && this.value === levels[currentLevelObject.currentLevel].correctAnswer) {
                if (currentLevelObject.currentLevel === 0) {
                    secondLevelCreator();
                }
                if (currentLevelObject.currentLevel === 1) {
                    thirdLevelCreator();
                }
                if (currentLevelObject.currentLevel === 2) {
                    fourthLevelCreator();
                }
                if (currentLevelObject.currentLevel === 3) {
                    fifthLevelCreator();
                }
                if (currentLevelObject.currentLevel === 4) {
                    sixthLevelCreator();
                }
                if (currentLevelObject.currentLevel === 5) {
                    seventhLevelCreator();
                }
                if (currentLevelObject.currentLevel === 6) {
                    eighthLevelCreator();
                }
                if (currentLevelObject.currentLevel === 7) {
                    ninthLevelCreator();
                }
                if (currentLevelObject.currentLevel === 8) {
                    tenthLevelCreator();
                }
            }
        });
    }
}
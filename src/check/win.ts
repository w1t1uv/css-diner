import {levels} from '../info/levels';
import {currentLevelObject} from '../index';

export function checkOneLevelWin() {
    const input = document.querySelector<HTMLInputElement>('.css-input');

    if (input) {
        input.addEventListener('keydown', function (event) {
            if (event.code === 'Enter' && this.value === levels[currentLevelObject.currentLevel].correctAnswer) {
                secondLevelCreator();
            }
        });
    }
}
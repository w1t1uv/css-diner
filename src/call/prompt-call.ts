import {levels} from '../info/levels';
import {useTheClueObject} from '../index';

function clueIsUsedOrNot() {
    const input = document.querySelector<HTMLInputElement>('.css-input');

    if (input) {
        useTheClueObject.useTheClue = true;

        const currentLevel = localStorage.getItem('storageLevel');

        input.value = levels[Number(currentLevel) - 1].clue;
    }
}

export function promptCall() {
    const helpButton = document.querySelector('.help-button');

    if (helpButton) {
        helpButton.addEventListener('click', clueIsUsedOrNot);
    }
}
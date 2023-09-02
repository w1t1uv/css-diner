import {currentLevelObject} from '../index';

export function secondLevelCreator() {
    currentLevelObject.currentLevel = 1;

    const firstLevel = document.querySelector('.first');

    if (firstLevel) {
        firstLevel.classList.remove('selectedLevel');
    }

    const storageLevel = localStorage.getItem('storageLevel');

    if (storageLevel === '1') {
        localStorage.setItem('storageLevel', '2');
    }

    const layoutSimulation = document.querySelector('.layout-simulation');
    const whatToDo = document.querySelector('.what-to-do');
    const markup = document.querySelector('.markup');
    const secondLevel = document.querySelector('.second');

    if (layoutSimulation && whatToDo && markup && secondLevel) {
        whatToDo.textContent = 'Select the plates';

        layoutSimulation.innerHTML = '';

        const table = document.createElement('div');
        table.classList.add('table');
        table.classList.add('table-second-level');
        layoutSimulation.append(table);

        const sideOfTheTable = document.createElement('div');
        sideOfTheTable.classList.add('side-of-the-table');
        sideOfTheTable.classList.add('side-of-the-table-second-level');
        layoutSimulation.append(sideOfTheTable);

        const elementsWrapper = document.createElement('div');
        elementsWrapper.classList.add('elements-wrapper');
        table.append(elementsWrapper);

        const firstPlate = document.createElement('div');
        firstPlate.classList.add('plate');
        elementsWrapper.append(firstPlate);

        const box = document.createElement('div');
        box.classList.add('box');
        elementsWrapper.append(box);

        const secondPlate = document.createElement('div');
        secondPlate.classList.add('plate');
        elementsWrapper.append(secondPlate);

        markup.innerHTML = '<div> &lt;div class="table"&gt; <br> <div class="plate-markup">&lt;plate/&gt;</div> <div class="box-markup">&lt;box/&gt;</div> <div class="plate-markup">&lt;plate&gt;</div> &lt;/div&gt; </div>';

        secondLevel.classList.add('selectedLevel');
    }
}
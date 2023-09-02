import {currentLevelObject} from '../index';

export function thirdLevelCreator() {
    currentLevelObject.currentLevel = 2;

    const secondLevel = document.querySelector('.second');

    if (secondLevel) {
        secondLevel.classList.remove('selectedLevel');
    }

    const storageLevel = localStorage.getItem('storageLevel');

    if (storageLevel === '2') {
        localStorage.setItem('storageLevel', '3');
    }

    const layoutSimulation = document.querySelector('.layout-simulation');
    const whatToDo = document.querySelector('.what-to-do');
    const markup = document.querySelector('.markup');
    const thirdLevel = document.querySelector('.third');

    if (layoutSimulation && whatToDo && markup && thirdLevel) {
        whatToDo.textContent = 'Select the striped parallelogram';

        layoutSimulation.innerHTML = '';

        const table = document.createElement('div');
        table.classList.add('table');
        table.classList.add('table-third-level');
        layoutSimulation.append(table);

        const sideOfTheTable = document.createElement('div');
        sideOfTheTable.classList.add('side-of-the-table');
        sideOfTheTable.classList.add('side-of-the-table-third-level');
        layoutSimulation.append(sideOfTheTable);

        const elementsWrapper = document.createElement('div');
        elementsWrapper.classList.add('elements-wrapper');
        table.append(elementsWrapper);

        const parallelogram = document.createElement('div');
        parallelogram.classList.add('parallelogram');
        parallelogram.classList.add('parallelogram-striped');
        elementsWrapper.append(parallelogram);

        const plate = document.createElement('div');
        plate.classList.add('plate');
        elementsWrapper.append(plate);

        const box = document.createElement('div');
        box.classList.add('box');
        elementsWrapper.append(box);

        markup.innerHTML = '<div> &lt;div class="table"&gt; <br> <div class="parallelogram-markup">&lt;parallelogram class="striped"/&gt;</div> <div class="plate-markup">&lt;plate&gt;</div> <div class="box-markup">&lt;box/&gt;</div> &lt;/div&gt; </div>';

        thirdLevel.classList.add('selectedLevel');
    }
}
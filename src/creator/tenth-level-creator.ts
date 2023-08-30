import {currentLevelObject} from './index';

export function tenthLevelCreator() {
    currentLevelObject.currentLevel = 9;

    const ninthLevel = document.querySelector('.ninth');

    if (ninthLevel) {
        ninthLevel.classList.remove('selectedLevel');
    }

    const storageLevel = localStorage.getItem('storageLevel');

    if (storageLevel === '9') {
        localStorage.setItem('storageLevel', '10');
    }

    const layoutSimulation = document.querySelector('.layout-simulation');
    const whatToDo = document.querySelector('.what-to-do');
    const markup = document.querySelector('.markup');
    const tenthLevel = document.querySelector('.tenth');

    if (layoutSimulation && whatToDo && markup && tenthLevel) {
        whatToDo.textContent = 'Select all the things';

        layoutSimulation.innerHTML = '';

        const table = document.createElement('div');
        table.classList.add('table');
        table.classList.add('table-tenth-level');
        layoutSimulation.append(table);

        const sideOfTheTable = document.createElement('div');
        sideOfTheTable.classList.add('side-of-the-table');
        sideOfTheTable.classList.add('side-of-the-table-tenth-level');
        layoutSimulation.append(sideOfTheTable);

        const elementsWrapper = document.createElement('div');
        elementsWrapper.classList.add('elements-wrapper');
        table.append(elementsWrapper);

        const firstPlate = document.createElement('div');
        firstPlate.classList.add('plate');
        elementsWrapper.append(firstPlate);

        const secondPlate = document.createElement('div');
        secondPlate.classList.add('plate');
        elementsWrapper.append(secondPlate);

        const box = document.createElement('div');
        box.classList.add('box');
        elementsWrapper.append(box);

        const oval = document.createElement('div');
        oval.classList.add('oval');
        oval.classList.add('oval-nested');
        box.append(oval);

        const parallelogram = document.createElement('div');
        parallelogram.classList.add('parallelogram');
        parallelogram.classList.add('parallelogram-striped');
        elementsWrapper.append(parallelogram);

        const thirdPlate = document.createElement('div');
        thirdPlate.classList.add('plate');
        elementsWrapper.append(thirdPlate);

        const triangle = document.createElement('div');
        triangle.classList.add('triangle');
        triangle.classList.add('triangle-nested');
        thirdPlate.append(triangle);

        markup.innerHTML = '<div> &lt;div class="table"&gt; <br> <div class="plate-markup">&lt;plate/&gt;</div> <div class="plate-markup">&lt;plate/&gt;</div> <div class="box-markup">&lt;box&gt;</div> <div class="oval-markup-nested">&lt;oval/&gt;</div> <div class="box-markup">&lt;/box&gt;</div> <div class="parallelogram-markup">&lt;parallelogram class="striped"/&gt;</div> <div class="plate-markup">&lt;plate&gt;</div> <div class="triangle-markup">&lt;triangle/&gt;</div> <div class="plate-markup">&lt;/plate&gt;</div> &lt;/div&gt; </div>';

        tenthLevel.classList.add('selectedLevel');
    }
}
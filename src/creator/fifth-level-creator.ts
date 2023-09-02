import {currentLevelObject} from '../index';

export function fifthLevelCreator() {
    currentLevelObject.currentLevel = 4;

    const fourthLevel = document.querySelector('.fourth');

    if (fourthLevel) {
        fourthLevel.classList.remove('selectedLevel');
    }

    const storageLevel = localStorage.getItem('storageLevel');

    if (storageLevel === '4') {
        localStorage.setItem('storageLevel', '5');
    }

    const layoutSimulation = document.querySelector('.layout-simulation');
    const whatToDo = document.querySelector('.what-to-do');
    const markup = document.querySelector('.markup');
    const fifthLevel = document.querySelector('.fifth');

    if (layoutSimulation && whatToDo && markup && fifthLevel) {
        whatToDo.textContent = 'Select a triangle on a striped parallelogram';

        layoutSimulation.innerHTML = '';

        const table = document.createElement('div');
        table.classList.add('table');
        table.classList.add('table-fifth-level');
        layoutSimulation.append(table);

        const sideOfTheTable = document.createElement('div');
        sideOfTheTable.classList.add('side-of-the-table');
        sideOfTheTable.classList.add('side-of-the-table-fifth-level');
        layoutSimulation.append(sideOfTheTable);

        const elementsWrapper = document.createElement('div');
        elementsWrapper.classList.add('elements-wrapper');
        table.append(elementsWrapper);

        const box = document.createElement('div');
        box.classList.add('box');
        elementsWrapper.append(box);

        const firstTriangle = document.createElement('div');
        firstTriangle.classList.add('triangle');
        firstTriangle.classList.add('triangle-nested');
        box.append(firstTriangle);

        const plate = document.createElement('div');
        plate.classList.add('plate');
        elementsWrapper.append(plate);

        const oval = document.createElement('div');
        oval.classList.add('oval-nested');
        plate.append(oval);

        const parallelogram = document.createElement('div');
        parallelogram.classList.add('parallelogram');
        parallelogram.classList.add('parallelogram-striped');
        elementsWrapper.append(parallelogram);

        const secondTriangle = document.createElement('div');
        secondTriangle.classList.add('triangle');
        secondTriangle.classList.add('triangle-nested');
        parallelogram.append(secondTriangle);

        markup.innerHTML = '<div> &lt;div class="table"&gt; <br> <div class="box-markup">&lt;box&gt;</div> <div class="triangle-markup">&lt;triangle/&gt;</div> <div class="box-markup">&lt;/box&gt;</div> <div class="plate-markup">&lt;plate&gt;</div> <div class="oval-markup-nested">&lt;oval/&gt;</div> <div class="plate-markup">&lt;/plate&gt;</div> <div class="parallelogram-markup">&lt;parallelogram class="striped"&gt;</div> <div class="triangle-markup">&lt;triangle/&gt;</div> <div class="parallelogram-markup">&lt;/parallelogram&gt;</div> &lt;/div&gt; </div>';

        fifthLevel.classList.add('selectedLevel');
    }
}
import {currentLevelObject} from '../index';

export function sixthLevelCreator() {
    currentLevelObject.currentLevel = 5;

    const fifthLevel = document.querySelector('.fifth');

    if (fifthLevel) {
        fifthLevel.classList.remove('selectedLevel');
    }

    const storageLevel = localStorage.getItem('storageLevel');

    if (storageLevel === '5') {
        localStorage.setItem('storageLevel', '6');
    }

    const layoutSimulation = document.querySelector('.layout-simulation');
    const whatToDo = document.querySelector('.what-to-do');
    const markup = document.querySelector('.markup');
    const sixthLevel = document.querySelector('.sixth');

    if (layoutSimulation && whatToDo && markup && sixthLevel) {
        whatToDo.textContent = 'Select small triangles';

        layoutSimulation.innerHTML = '';

        const table = document.createElement('div');
        table.classList.add('table');
        table.classList.add('table-sixth-level');
        layoutSimulation.append(table);

        const sideOfTheTable = document.createElement('div');
        sideOfTheTable.classList.add('side-of-the-table');
        sideOfTheTable.classList.add('side-of-the-table-sixth-level');
        layoutSimulation.append(sideOfTheTable);

        const elementsWrapper = document.createElement('div');
        elementsWrapper.classList.add('elements-wrapper');
        table.append(elementsWrapper);

        const triangle = document.createElement('div');
        triangle.classList.add('triangle');
        triangle.classList.add('triangle-sixth-level');
        elementsWrapper.append(triangle);

        const firstTriangleSmall = document.createElement('div');
        firstTriangleSmall.classList.add('triangle-small');
        elementsWrapper.append(firstTriangleSmall);

        const parallelogram = document.createElement('div');
        parallelogram.classList.add('parallelogram');
        elementsWrapper.append(parallelogram);

        const oval = document.createElement('div');
        oval.classList.add('oval');
        oval.classList.add('oval-sixth-level');
        parallelogram.append(oval);

        const ovalSmall = document.createElement('div');
        ovalSmall.classList.add('oval-small');
        ovalSmall.classList.add('oval-small-sixth-level');
        elementsWrapper.append(ovalSmall);

        const plate = document.createElement('div');
        plate.classList.add('plate');
        elementsWrapper.append(plate);

        const secondTriangleSmall = document.createElement('div');
        secondTriangleSmall.classList.add('triangle-small');
        plate.append(secondTriangleSmall);

        markup.innerHTML = '<div> &lt;div class="table"&gt; <br> <div class="triangle-markup">&lt;triangle/&gt;</div> <div class="triangle-markup">&lt;triangle class="small"/&gt;</div> <div class="parallelogram-markup">&lt;parallelogram&gt;</div> <div class="oval-markup-nested">&lt;oval&gt;</div> <div class="parallelogram-markup">&lt;/parallelogram&gt;</div> <div class="oval-markup">&lt;oval class="small"&gt;</div> <div class="plate-markup">&lt;plate&gt;</div> <div class="triangle-markup">&lt;triangle class="small"/&gt;</div> <div class="plate-markup">&lt;/plate&gt;</div> &lt;/div&gt; </div>';

        sixthLevel.classList.add('selectedLevel');
    }
}
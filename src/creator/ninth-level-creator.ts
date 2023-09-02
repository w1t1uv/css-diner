import {currentLevelObject} from '../index';

export function ninthLevelCreator() {
    currentLevelObject.currentLevel = 8;

    const eighthLevel = document.querySelector('.eighth');

    if (eighthLevel) {
        eighthLevel.classList.remove('selectedLevel');
    }

    const storageLevel = localStorage.getItem('storageLevel');

    if (storageLevel === '8') {
        localStorage.setItem('storageLevel', '9');
    }

    const layoutSimulation = document.querySelector('.layout-simulation');
    const whatToDo = document.querySelector('.what-to-do');
    const markup = document.querySelector('.markup');
    const ninthLevel = document.querySelector('.ninth');

    if (layoutSimulation && whatToDo && markup && ninthLevel) {
        whatToDo.textContent = 'Select everything on a plate';

        layoutSimulation.innerHTML = '';

        const table = document.createElement('div');
        table.classList.add('table');
        table.classList.add('table-ninth-level');
        layoutSimulation.append(table);

        const sideOfTheTable = document.createElement('div');
        sideOfTheTable.classList.add('side-of-the-table');
        sideOfTheTable.classList.add('side-of-the-table-ninth-level');
        layoutSimulation.append(sideOfTheTable);

        const elementsWrapper = document.createElement('div');
        elementsWrapper.classList.add('elements-wrapper');
        table.append(elementsWrapper);

        const parallelogram = document.createElement('div');
        parallelogram.classList.add('parallelogram');
        parallelogram.classList.add('parallelogram-striped');
        elementsWrapper.append(parallelogram);

        const firstPlate = document.createElement('div');
        firstPlate.classList.add('plate');
        elementsWrapper.append(firstPlate);

        const triangle = document.createElement('div');
        triangle.classList.add('triangle');
        firstPlate.append(triangle);

        const secondPlate = document.createElement('div');
        secondPlate.classList.add('plate');
        elementsWrapper.append(secondPlate);

        const firstOval = document.createElement('div');
        firstOval.classList.add('oval');
        firstOval.classList.add('oval-nested');
        secondPlate.append(firstOval);

        const thirdPlate = document.createElement('div');
        thirdPlate.classList.add('plate');
        elementsWrapper.append(thirdPlate);

        const secondOval = document.createElement('div');
        secondOval.classList.add('oval');
        secondOval.classList.add('oval-nested');
        thirdPlate.append(secondOval);

        markup.innerHTML = '<div> &lt;div class="table"&gt; <br> <div class="parallelogram-markup">&lt;parallelogram class="striped"/&gt;</div> <div class="plate-markup">&lt;plate&gt;</div> <div class="triangle-markup">&lt;triangle/&gt;</div> <div class="plate-markup">&lt;/plate&gt;</div> <div class="plate-markup">&lt;plate&gt;</div> <div class="oval-markup-nested">&lt;oval/&gt;</div> <div class="plate-markup">&lt;/plate&gt;</div> <div class="plate-markup">&lt;plate&gt;</div> <div class="oval-markup-nested">&lt;oval/&gt;</div> <div class="plate-markup">&lt;/plate&gt;</div> &lt;/div&gt; </div>';

        ninthLevel.classList.add('selectedLevel');
    }
}
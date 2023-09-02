import {currentLevelObject} from '../index';

export function fourthLevelCreator() {
    currentLevelObject.currentLevel = 3;

    const thirdLevel = document.querySelector('.third');

    if (thirdLevel) {
        thirdLevel.classList.remove('selectedLevel');
    }

    const storageLevel = localStorage.getItem('storageLevel');

    if (storageLevel === '3') {
        localStorage.setItem('storageLevel', '4');
    }

    const layoutSimulation = document.querySelector('.layout-simulation');
    const whatToDo = document.querySelector('.what-to-do');
    const markup = document.querySelector('.markup');
    const fourthLevel = document.querySelector('.fourth');

    if (layoutSimulation && whatToDo && markup && fourthLevel) {
        whatToDo.textContent = 'Select an oval on the box';

        layoutSimulation.innerHTML = '';

        const table = document.createElement('div');
        table.classList.add('table');
        table.classList.add('table-fourth-level');
        layoutSimulation.append(table);

        const sideOfTheTable = document.createElement('div');
        sideOfTheTable.classList.add('side-of-the-table');
        sideOfTheTable.classList.add('side-of-the-table-fourth-level');
        layoutSimulation.append(sideOfTheTable);

        const elementsWrapper = document.createElement('div');
        elementsWrapper.classList.add('elements-wrapper');
        table.append(elementsWrapper);

        const plate = document.createElement('div');
        plate.classList.add('plate');
        elementsWrapper.append(plate);

        const box = document.createElement('div');
        box.classList.add('box');
        elementsWrapper.append(box);

        const firstOval = document.createElement('div');
        firstOval.classList.add('oval-nested');
        box.append(firstOval);

        const secondOval = document.createElement('div');
        secondOval.classList.add('oval');
        elementsWrapper.append(secondOval);

        markup.innerHTML = '<div> &lt;div class="table"&gt; <br> <div class="plate-markup">&lt;plate&gt;</div> <div class="box-markup">&lt;box&gt;</div> <div class="oval-markup-nested">&lt;oval/&gt;</div> <div class="box-markup">&lt;/box&gt;</div> <div class="oval-markup">&lt;oval/&gt;</div> &lt;/div&gt; </div>';

        fourthLevel.classList.add('selectedLevel');
    }
}
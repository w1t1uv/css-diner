import {currentLevelObject} from '../index';

export function eighthLevelCreator() {
    currentLevelObject.currentLevel = 7;

    const seventhLevel = document.querySelector('.seventh');

    if (seventhLevel) {
        seventhLevel.classList.remove('selectedLevel');
    }

    const storageLevel = localStorage.getItem('storageLevel');

    if (storageLevel === '7') {
        localStorage.setItem('storageLevel', '8');
    }

    const layoutSimulation = document.querySelector('.layout-simulation');
    const whatToDo = document.querySelector('.what-to-do');
    const markup = document.querySelector('.markup');
    const eighthLevel = document.querySelector('.eighth');

    if (layoutSimulation && whatToDo && markup && eighthLevel) {
        whatToDo.textContent = 'Select all boxes and plates';

        layoutSimulation.innerHTML = '';

        const table = document.createElement('div');
        table.classList.add('table');
        table.classList.add('table-eighth-level');
        layoutSimulation.append(table);

        const sideOfTheTable = document.createElement('div');
        sideOfTheTable.classList.add('side-of-the-table');
        sideOfTheTable.classList.add('side-of-the-table-eighth-level');
        layoutSimulation.append(sideOfTheTable);

        const elementsWrapper = document.createElement('div');
        elementsWrapper.classList.add('elements-wrapper');
        table.append(elementsWrapper);

        const firstTriangle = document.createElement('div');
        firstTriangle.classList.add('triangle');
        firstTriangle.classList.add('triangle-eighth-level');
        elementsWrapper.append(firstTriangle);

        const firstSmallTriangle = document.createElement('div');
        firstSmallTriangle.classList.add('triangle');
        firstSmallTriangle.classList.add('triangle-small');
        elementsWrapper.append(firstSmallTriangle);

        const firstBox = document.createElement('div');
        firstBox.classList.add('box');
        elementsWrapper.append(firstBox);

        const secondSmallTriangle = document.createElement('div');
        secondSmallTriangle.classList.add('triangle');
        secondSmallTriangle.classList.add('triangle-nested');
        firstBox.append(secondSmallTriangle);

        const plate = document.createElement('div');
        plate.classList.add('plate');
        elementsWrapper.append(plate);

        const thirdSmallTriangle = document.createElement('div');
        thirdSmallTriangle.classList.add('triangle');
        thirdSmallTriangle.classList.add('triangle-nested');
        plate.append(thirdSmallTriangle);

        const secondBox = document.createElement('div');
        secondBox.classList.add('box');
        elementsWrapper.append(secondBox);

        const fourthSmallTriangle = document.createElement('div');
        fourthSmallTriangle.classList.add('triangle');
        fourthSmallTriangle.classList.add('triangle-nested');
        secondBox.append(fourthSmallTriangle);

        const fifthSmallTriangle = document.createElement('div');
        fifthSmallTriangle.classList.add('triangle');
        fifthSmallTriangle.classList.add('triangle-small');
        elementsWrapper.append(fifthSmallTriangle);

        const secondTriangle = document.createElement('div');
        secondTriangle.classList.add('triangle');
        secondTriangle.classList.add('triangle-eighth-level');
        elementsWrapper.append(secondTriangle);

        markup.innerHTML = '<div> &lt;div class="table"&gt; <br> <div class="triangle-markup">&lt;triangle&gt;</div> <div class="triangle-markup">&lt;triangle class="small"&gt;</div> <div class="box-markup">&lt;box&gt;</div> <div class="triangle-markup">&lt;triangle&gt;</div> <div class="box-markup">&lt;/box&gt;</div> <div class="plate-markup">&lt;plate&gt;</div> <div class="triangle-markup">&lt;triangle&gt;</div> <div class="plate-markup">&lt;/plate&gt;</div> <div class="box-markup">&lt;box&gt;</div> <div class="triangle-markup">&lt;triangle&gt;</div> <div class="box-markup">&lt;/box&gt;</div> <div class="triangle-markup">&lt;triangle class="small"&gt;</div> <div class="triangle-markup">&lt;triangle&gt;</div> &lt;/div&gt; </div>';

        eighthLevel.classList.add('selectedLevel');
    }
}
import {currentLevelObject} from '../index';

export function seventhLevelCreator() {
    currentLevelObject.currentLevel = 6;

    const sixthLevel = document.querySelector('.sixth');

    if (sixthLevel) {
        sixthLevel.classList.remove('selectedLevel');
    }

    const storageLevel = localStorage.getItem('storageLevel');

    if (storageLevel === '6') {
        localStorage.setItem('storageLevel', '7');
    }

    const layoutSimulation = document.querySelector('.layout-simulation');
    const whatToDo = document.querySelector('.what-to-do');
    const markup = document.querySelector('.markup');
    const seventhLevel = document.querySelector('.seventh');

    if (layoutSimulation && whatToDo && markup && seventhLevel) {
        whatToDo.textContent = 'Select the small ovals in the box';

        layoutSimulation.innerHTML = '';

        const table = document.createElement('div');
        table.classList.add('table');
        table.classList.add('table-seventh-level');
        layoutSimulation.append(table);

        const sideOfTheTable = document.createElement('div');
        sideOfTheTable.classList.add('side-of-the-table');
        sideOfTheTable.classList.add('side-of-the-table-seventh-level');
        layoutSimulation.append(sideOfTheTable);

        const elementsWrapper = document.createElement('div');
        elementsWrapper.classList.add('elements-wrapper');
        table.append(elementsWrapper);

        const firstBox = document.createElement('div');
        firstBox.classList.add('box');
        elementsWrapper.append(firstBox);

        const firstSmallOval = document.createElement('div');
        firstSmallOval.classList.add('oval');
        firstSmallOval.classList.add('oval-small');
        firstBox.append(firstSmallOval);

        const secondSmallOval = document.createElement('div');
        secondSmallOval.classList.add('oval');
        secondSmallOval.classList.add('oval-small');
        secondSmallOval.classList.add('oval-small-seventh-level');
        elementsWrapper.append(secondSmallOval);

        const secondBox = document.createElement('div');
        secondBox.classList.add('box');
        elementsWrapper.append(secondBox);

        const thirdSmallOval = document.createElement('div');
        thirdSmallOval.classList.add('oval');
        thirdSmallOval.classList.add('oval-small');
        secondBox.append(thirdSmallOval);

        const thirdBox = document.createElement('div');
        thirdBox.classList.add('box');
        elementsWrapper.append(thirdBox);

        const triangle = document.createElement('div');
        triangle.classList.add('triangle');
        triangle.classList.add('triangle-nested');
        thirdBox.append(triangle);

        const fourthBox = document.createElement('div');
        fourthBox.classList.add('box');
        elementsWrapper.append(fourthBox);

        const fourthSmallOval = document.createElement('div');
        fourthSmallOval.classList.add('oval');
        fourthSmallOval.classList.add('oval-small');
        fourthBox.append(fourthSmallOval);

        markup.innerHTML = '<div> &lt;div class="table"&gt; <br> <div class="box-markup">&lt;box&gt;</div> <div class="oval-markup-nested">&lt;oval class="small"&gt;</div> <div class="box-markup">&lt;/box&gt;</div> <div class="oval-markup">&lt;oval class="small"&gt;</div> <div class="box-markup">&lt;box&gt;</div> <div class="oval-markup-nested">&lt;oval class="small"&gt;</div> <div class="box-markup">&lt;/box&gt;</div> <div class="box-markup">&lt;box&gt;</div> <div class="triangle-markup">&lt;triangle&gt;</div> <div class="box-markup">&lt;/box&gt;</div> <div class="box-markup">&lt;box&gt;</div> <div class="oval-markup-nested">&lt;oval class="small"&gt;</div> <div class="box-markup">&lt;/box&gt;</div> &lt;/div&gt; </div>';

        seventhLevel.classList.add('selectedLevel');
    }
}
export function firstLevelCreator() {
    const layoutSimulation = document.querySelector('.layout-simulation');
    const whatToDo = document.querySelector('.what-to-do');
    const markup = document.querySelector('.markup');
    const firstLevel = document.querySelector('.first');

    if (layoutSimulation && whatToDo && markup && firstLevel) {
        whatToDo.textContent = 'Select a plate with a triangle';

        const table = document.createElement('div');
        table.classList.add('table');
        layoutSimulation.append(table);

        const sideOfTheTable = document.createElement('div');
        sideOfTheTable.classList.add('side-of-the-table');
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

        const triangle = document.createElement('div');
        triangle.classList.add('triangle');
        secondPlate.append(triangle);

        markup.innerHTML = '<div> &lt;div class="table"&gt; <br> <div class="plate-markup">&lt;plate/&gt;</div> <div class="plate-markup">&lt;plate&gt;</div> <div class="triangle-markup">&lt;triangle/&gt;</div> <div class="plate-markup">&lt;/plate&gt;</div> &lt;/div&gt; </div>';

        firstLevel.classList.add('selectedLevel');
    }
}
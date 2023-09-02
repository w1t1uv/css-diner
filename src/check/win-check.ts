export function winCheck() {
    const completedLevels = localStorage.getItem('completedLevels');

    if (completedLevels === '10') {
        const whatToDo = document.querySelector('.what-to-do');
        const layoutSimulation = document.querySelector('.layout-simulation');

        if (whatToDo && layoutSimulation) {
            whatToDo.textContent = 'Hooray! U passed all the levels!';
            layoutSimulation.innerHTML = '';
        }
    }
}
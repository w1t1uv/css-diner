export function initCompletedLevels() {
    const completedLevels = localStorage.getItem('completedLevels');

    if (completedLevels === null) {
        localStorage.setItem('completedLevels', '0');
    }
}
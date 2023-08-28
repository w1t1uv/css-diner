export function initLevel() {
    const storageLevel = localStorage.getItem('storageLevel');

    if (storageLevel === null) {
        localStorage.setItem('storageLevel', '1');
    }
}
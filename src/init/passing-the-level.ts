export function initPassingTheLevel() {
    const passingTheFirstLevel = localStorage.getItem('passingTheFirstLevel');
    const passingTheSecondLevel = localStorage.getItem('passingTheSecondLevel');
    const passingTheThirdLevel = localStorage.getItem('passingTheThirdLevel');
    const passingTheFourthLevel = localStorage.getItem('passingTheFourthLevel');
    const passingTheFifthLevel = localStorage.getItem('passingTheFifthLevel');
    const passingTheSixthLevel = localStorage.getItem('passingTheSixthLevel');
    const passingTheSeventhLevel = localStorage.getItem('passingTheSeventhLevel');
    const passingTheEighthLevel = localStorage.getItem('passingTheEighthLevel');
    const passingTheNinthLevel = localStorage.getItem('passingTheNinthLevel');
    const passingTheTenthLevel = localStorage.getItem('passingTheTenthLevel');

    if (passingTheFirstLevel === null) {
        localStorage.setItem('passingTheFirstLevel', 'not passed');
    }
    if (passingTheSecondLevel === null) {
        localStorage.setItem('passingTheSecondLevel', 'not passed');
    }
    if (passingTheThirdLevel === null) {
        localStorage.setItem('passingTheThirdLevel', 'not passed');
    }
    if (passingTheFourthLevel === null) {
        localStorage.setItem('passingTheFourthLevel', 'not passed');
    }
    if (passingTheFifthLevel === null) {
        localStorage.setItem('passingTheFifthLevel', 'not passed');
    }
    if (passingTheSixthLevel === null) {
        localStorage.setItem('passingTheSixthLevel', 'not passed');
    }
    if (passingTheSeventhLevel === null) {
        localStorage.setItem('passingTheSeventhLevel', 'not passed');
    }
    if (passingTheEighthLevel === null) {
        localStorage.setItem('passingTheEighthLevel', 'not passed');
    }
    if (passingTheNinthLevel === null) {
        localStorage.setItem('passingTheNinthLevel', 'not passed');
    }
    if (passingTheTenthLevel === null) {
        localStorage.setItem('passingTheTenthLevel', 'not passed');
    }
}
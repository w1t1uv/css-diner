export function colorTheCheck() {
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

    const firstPartOfFirstCheck = document.querySelector('.first-part-of-first-check');
    const firstPartOfSecondCheck = document.querySelector('.first-part-of-second-check');
    const firstPartOfThirdCheck = document.querySelector('.first-part-of-third-check');
    const firstPartOfFourthCheck = document.querySelector('.first-part-of-fourth-check');
    const firstPartOfFifthCheck = document.querySelector('.first-part-of-fifth-check');
    const firstPartOfSixthCheck = document.querySelector('.first-part-of-sixth-check');
    const firstPartOfSeventhCheck = document.querySelector('.first-part-of-seventh-check');
    const firstPartOfEighthCheck = document.querySelector('.first-part-of-eighth-check');
    const firstPartOfNinthCheck = document.querySelector('.first-part-of-ninth-check');
    const firstPartOfTenthCheck = document.querySelector('.first-part-of-tenth-check');

    const secondPartOfFirstCheck = document.querySelector('.second-part-of-first-check');
    const secondPartOfSecondCheck = document.querySelector('.second-part-of-second-check');
    const secondPartOfThirdCheck = document.querySelector('.second-part-of-third-check');
    const secondPartOfFourthCheck = document.querySelector('.second-part-of-fourth-check');
    const secondPartOfFifthCheck = document.querySelector('.second-part-of-fifth-check');
    const secondPartOfSixthCheck = document.querySelector('.second-part-of-sixth-check');
    const secondPartOfSeventhCheck = document.querySelector('.second-part-of-seventh-check');
    const secondPartOfEighthCheck = document.querySelector('.second-part-of-eighth-check');
    const secondPartOfNinthCheck = document.querySelector('.second-part-of-ninth-check');
    const secondPartOfTenthCheck = document.querySelector('.second-part-of-tenth-check');

    if (firstPartOfFirstCheck && firstPartOfSecondCheck && firstPartOfThirdCheck && firstPartOfFourthCheck && firstPartOfFifthCheck
        && firstPartOfSixthCheck && firstPartOfSeventhCheck && firstPartOfEighthCheck && firstPartOfNinthCheck && firstPartOfTenthCheck
        && secondPartOfFirstCheck && secondPartOfSecondCheck && secondPartOfThirdCheck && secondPartOfFourthCheck
        && secondPartOfFifthCheck && secondPartOfSixthCheck && secondPartOfSeventhCheck && secondPartOfEighthCheck
        && secondPartOfNinthCheck && secondPartOfTenthCheck) {
        if (passingTheFirstLevel === 'passed') {
            firstPartOfFirstCheck.classList.add('successfully');
            secondPartOfFirstCheck.classList.add('successfully');
        } else if (passingTheFirstLevel === 'used clue') {
            firstPartOfFirstCheck.classList.add('clue-used');
            secondPartOfFirstCheck.classList.add('clue-used');
        }
        if (passingTheSecondLevel === 'passed') {
            firstPartOfSecondCheck.classList.add('successfully');
            secondPartOfSecondCheck.classList.add('successfully');
        } else if (passingTheSecondLevel === 'used clue') {
            firstPartOfSecondCheck.classList.add('clue-used');
            secondPartOfSecondCheck.classList.add('clue-used');
        }
        if (passingTheThirdLevel === 'passed') {
            firstPartOfThirdCheck.classList.add('successfully');
            secondPartOfThirdCheck.classList.add('successfully');
        } else if (passingTheThirdLevel === 'used clue') {
            firstPartOfThirdCheck.classList.add('clue-used');
            secondPartOfThirdCheck.classList.add('clue-used');
        }
        if (passingTheFourthLevel === 'passed') {
            firstPartOfFourthCheck.classList.add('successfully');
            secondPartOfFourthCheck.classList.add('successfully');
        } else if (passingTheFourthLevel === 'used clue') {
            firstPartOfFourthCheck.classList.add('clue-used');
            secondPartOfFourthCheck.classList.add('clue-used');
        }
        if (passingTheFifthLevel === 'passed') {
            firstPartOfFifthCheck.classList.add('successfully');
            secondPartOfFifthCheck.classList.add('successfully');
        } else if (passingTheFifthLevel === 'used clue') {
            firstPartOfFifthCheck.classList.add('clue-used');
            secondPartOfFifthCheck.classList.add('clue-used');
        }
        if (passingTheSixthLevel === 'passed') {
            firstPartOfSixthCheck.classList.add('successfully');
            secondPartOfSixthCheck.classList.add('successfully');
        } else if (passingTheSixthLevel === 'used clue') {
            firstPartOfSixthCheck.classList.add('clue-used');
            secondPartOfSixthCheck.classList.add('clue-used');
        }
        if (passingTheSeventhLevel === 'passed') {
            firstPartOfSeventhCheck.classList.add('successfully');
            secondPartOfSeventhCheck.classList.add('successfully');
        } else if (passingTheSeventhLevel === 'used clue') {
            firstPartOfSeventhCheck.classList.add('clue-used');
            secondPartOfSeventhCheck.classList.add('clue-used');
        }
        if (passingTheEighthLevel === 'passed') {
            firstPartOfEighthCheck.classList.add('successfully');
            secondPartOfEighthCheck.classList.add('successfully');
        } else if (passingTheEighthLevel === 'used clue') {
            firstPartOfEighthCheck.classList.add('clue-used');
            secondPartOfEighthCheck.classList.add('clue-used');
        }
        if (passingTheNinthLevel === 'passed') {
            firstPartOfNinthCheck.classList.add('successfully');
            secondPartOfNinthCheck.classList.add('successfully');
        } else if (passingTheNinthLevel === 'used clue') {
            firstPartOfNinthCheck.classList.add('clue-used');
            secondPartOfNinthCheck.classList.add('clue-used');
        }
        if (passingTheTenthLevel === 'passed') {
            firstPartOfTenthCheck.classList.add('successfully');
            secondPartOfTenthCheck.classList.add('successfully');
        } else if (passingTheTenthLevel === 'used clue') {
            firstPartOfTenthCheck.classList.add('clue-used');
            secondPartOfTenthCheck.classList.add('clue-used');
        }
    }
}
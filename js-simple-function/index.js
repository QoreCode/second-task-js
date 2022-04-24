export function func(testingString, firstLetter, secondLetter) {

    // получилось два решения, одно - закомментированное
    // второе - после того как узнал про метод lastIndexOf
    // оба рабочи

    // if(testingString.length <= 0) {
    //     return -1;
    // }

    // let strArr = Array.from(testingString);
    // let firstLetterLastIndex = 0;
    // let secondLetterLastIndex = 0;

    // strArr.forEach((letter, index) => {
    //     if (letter === firstLetter) {
    //         firstLetterLastIndex = index;
    //     }
    //     if (letter === secondLetter) {
    //         secondLetterLastIndex = index;
    //     }
    // });

    // if (firstLetterLastIndex === 0 && secondLetterLastIndex === 0) {
    //     return -1;
    // }

    // return firstLetterLastIndex > secondLetterLastIndex ? firstLetterLastIndex : secondLetterLastIndex;

    if (testingString.length === 0 | firstLetter?.length > 1 || secondLetter?.length > 1) {
        return -1;
    }

    const firstLetterLastIndex = testingString.lastIndexOf(firstLetter);
    const secondLetterLastIndex = testingString.lastIndexOf(secondLetter);
    
    return firstLetterLastIndex > secondLetterLastIndex ? firstLetterLastIndex : secondLetterLastIndex;
}

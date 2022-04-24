export function func(s, a, b) {

    if(s.length <= 0) {
        return -1;
    }

    let strArr = Array.from(s);
    let aIndex = 0;
    let bIndex = 0;
    
    strArr.forEach((letter, index) => {
        if (letter === a) {
            aIndex = index;
        }
        if (letter === b) {
            bIndex = index;
        }
    });

    if (aIndex === 0 && bIndex === 0) {
        return -1;
    }

    return aIndex > bIndex ? aIndex : bIndex;
}

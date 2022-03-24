export function func(s, a, b) {

    if (!s.length) {
        return -1;
    }

    let i = s.length - 1;
    let firstIndex = -1;
    let secondIndex = -1;

    while (
        (firstIndex === -1) &&
        (secondIndex === -1) &&
        (i > 0)
        ) {
        if (s.substring(i, i + 1) === a) {
            firstIndex = i;
        }
        if (s.substring(i, i + 1) === b) {
            secondIndex = i;
        }
        i = i - 1;
    }

    return Math.max(firstIndex, secondIndex);
}

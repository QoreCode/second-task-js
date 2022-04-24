/**
 * Похоже что функция ищет позицию символов a,b в строке
 * и возвращает наибольший вариант из найденного
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
function func(s, a, b) {

    if (s.length === 0) {
        return -1;
    }

    let i = s.length - 1;
    while (i > 0) {
        if (s[i] === a) return i;
        if (s[i] === b) return i;
        i--;
    }
    return -1;
}

module.exports = {
    func
}

export function func(string, a, b) {
    /*
       Видимо цель регулярки была в проверке управляющих символов, к примеру \n, и пустой строки,
       но в ES это не пройдет
     */

    for (let i = string.length - 1; i >= 0; --i) {
        if (string[i] === a || string[i] === b) {
            return i;
        }
    }

    return -1;
}

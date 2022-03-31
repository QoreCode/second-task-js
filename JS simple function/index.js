/**
 * 
 * @param {string} s string to test
 * @param {any} a first param
 * @param {any} b second param
 * @returns Last index of either a or b in s (what appears rightmost). Equality is
 * determined using non-strict comparison, on a per-char basis. If the last index of a or b
 * is 0 or no match has been found, -1 is returned
 */
export function func(s, a, b) {

    if (s === "" ||
        a && a.length === 0 || // Optimize for arguments with length > 1,
        b && b.length === 0) { // they all will take O(n)
        return -1;
    }

    let i = s.length - 1;
    while (i > 0) {
        if (s[i] == a || s[i] == b) {
            return i;
        }
        i -= 1;
    }

    return -1;
}

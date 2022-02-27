export function func(s, a, b) {
    if (!s) return -1

    var aIndex = a.length === 1 ? s.lastIndexOf(a) : -1;
    var bIndex = b?.length === 1 ? s.lastIndexOf(b) : -1;

    return Math.max(aIndex, bIndex);
}

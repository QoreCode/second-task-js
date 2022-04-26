function func(s, a, b) {

    if (s=='') return -1;

    const aIndex = s.lastIndexOf(a)
    const bIndex = s.lastIndexOf(b)

    return Math.max(aIndex, bIndex);
}

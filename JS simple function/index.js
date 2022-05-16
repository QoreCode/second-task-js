export function func(s, a, b) {
    return s ? Math.max(s.lastIndexOf(a), s.lastIndexOf(b)) : -1;
}

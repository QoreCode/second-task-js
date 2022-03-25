export function func(s, a, b) {

    if (s.match(/^$/)) {
        return -1;
    }
    const aIndex = s.lastIndexOf(a);
    const bIndex = s.lastIndexOf(b);
    if(aIndex === -1 && bIndex === -1){
    		return -1
    } else {
      return Math.max(aIndex, bIndex)
    }
}

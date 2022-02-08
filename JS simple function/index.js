export function func(s, a, b) {
    /*
      Если бы я решала эту задачу, я бы использовала декларативный подход.
      А то пока не прочитаешь тесты вообще не понятно, что здесь происходит)
     */
    if (s.match(/^$/)) {
        return -1;
    }

    const i = s.split('').reverse().findIndex(e => e === a || e === b);
    return i > -1 ? s.length - 1 - i : -1;

    /*
      Если целью было поправить конкретное решение, то я бы упростила таким образом.
     */
    // let i = s.length - 1;
    // let index = -1;
    //
    // while (index === -1 && (i > 0)) {
    //   const substr = s.substring(i, i + 1);
    //   if (substr === a || substr === b) index = i;
    //   i -= 1;
    // }
    // return index;
}

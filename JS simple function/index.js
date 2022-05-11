export function func(s, a, b = "") {
  const isSuitableFirstParam = a.length === 1;
  const isSubstringContainParams = s.includes(a) || s.includes(b);

  if (!s.length || !isSubstringContainParams || !isSuitableFirstParam) {
    return -1;
  }

  const aLastIdx = s.lastIndexOf(a);
  const bLastIdx = s.lastIndexOf(b);

  return b ? Math.max(aLastIdx, bLastIdx) : aLastIdx;
}

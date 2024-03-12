/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  return arr.sort((a, b) => {
    let countA = getBits(a);
    let countB = getBits(b);
    return countA - countB || a - b;
  });
};
function getBits(number) {
  let count = 0;
  while (number) {
    count = count + 1;
    number = number & (number - 1);
  }
  return count;
}
// Runtime 64ms
// Memory 52.16MB

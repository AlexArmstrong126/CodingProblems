/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  const map = {};

  // Used to create the frequency table to showcase the
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  // for loop used to concatinate the letters that are in the order string
  // these characters are contatinated X amount times depending on the established frequency table
  let sortedS = "";
  for (const char of order) {
    sortedS += char.repeat(map[char]);
  }
  console.log(sortedS);

  // for loop used to concatinate the letters that are not in the order string
  // If the character within the S string is not contained within the order string it is then
  // Concatinated at the end of the sorted string
  for (const char of s) {
    if (!order.includes(char)) {
      sortedS += char;
    }
  }

  return sortedS;
};
// Runtime 48ms
// Memory 51.54MB

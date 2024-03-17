/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  // first solution
  // let joinedWord1= word1.reduce((a,c) => {
  //     return ( a + c)
  // })
  // let joinedWord2= word2.reduce((a,c) => {
  //     return ( a + c)
  // })

  // Optimised solution
  let joinedWord1 = word1.join('');
  let joinedWord2 = word2.join('');

  return joinedWord1 === joinedWord2;
};
// Runtime 84ms
// Memory 54.21MB
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/submissions/1206714435?envType=daily-question&envId=2024-03-17

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let sortedChild = g.sort((a, b) => {
    return a - b;
  });
  let sortedCookie = s.sort((a, b) => {
    return a - b;
  });
  let content = 0;
  let cookieIndex = 0;
  while (cookieIndex < sortedCookie.length && content < sortedChild.length) {
    if (sortedCookie[cookieIndex] >= sortedChild[content]) {
      content++;
    }
    cookieIndex++;
  }
  return content;
};
// Runtime 210ms
// Memory 73.21MB
// https://leetcode.com/problems/assign-cookies/submissions/1207705876

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  var buildStack = function (str) {
    let stack = [];
    let string = str.split('');
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (char === '#') {
        if (stack.length > 0) {
          stack.pop();
        }
        continue;
      }
      stack.push(char);
    }
    return stack.toString();
  };
  return buildStack(s) === buildStack(t);
};
// Runtime 54ms
// Memory 49.06MB
// https://leetcode.com/problems/backspace-string-compare/submissions/1203934825?envType=daily-question&envId=2024-03-14

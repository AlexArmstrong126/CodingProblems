/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    let wealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      wealth += accounts[i][j];
    }
    if (wealth > max) {
      max = wealth;
    }
  }

  return max;
};
// Runtime 72ms
// Memory 52.56MB
// https://leetcode.com/problems/richest-customer-wealth/submissions/1219534667

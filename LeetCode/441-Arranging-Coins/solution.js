/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  // let coin = n
  // let row = 0
  // if(n === 1){
  //     return 1
  // }
  // for(let i = 1; i <= n; i++){
  //     if(coin >= i){
  //         row++
  //         coin -= i
  //     }

  // }
  // return row

  // More optimized
  let coin = 0;
  let count = 1;

  while (coin < n) {
    coin += count + 1;
    count++;
  }
  return count - 1;
};
// Runtime 83ms
// Memory 52.96MB
// https://leetcode.com/problems/arranging-coins/submissions/1207688074

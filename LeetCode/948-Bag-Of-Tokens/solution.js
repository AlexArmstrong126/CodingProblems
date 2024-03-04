/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
  if (tokens.length === 0) return 0;
  var score = 0;
  var low = 0;
  var high = tokens.length - 1;
  const sorted = tokens.sort((a, b) => a - b);

  while (low <= high) {
    if (power >= sorted[low]) {
      score += 1;
      power -= sorted[low];
      low += 1;
    } else if (score > 0 && low < high) {
      score -= 1;
      power += sorted[high];
      high -= 1;
    } else {
      return score;
    }
  }

  return score;
};

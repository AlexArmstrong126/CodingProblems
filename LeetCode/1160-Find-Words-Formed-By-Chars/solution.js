/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let map = {};
  let ans = 0;

  // Char map creation
  for (let i = 0; i < chars.length; i++) {
    if (map[chars[i]] === undefined) {
      map[chars[i]] = 1;
    } else {
      map[chars[i]] = map[chars[i]] + 1;
    }
  }

  // loop through each word in words array
  for (var word of words) {
    // create copy of char map to be used to check again characters in words
    var copy = { ...map };
    // loop though all characters in each word
    for (var char of word) {
      // if the character is in the map and the frequency of the character is not 0 decrease the
      // value (frequency)
      if (char in copy && copy[char] !== 0) {
        copy[char] -= 1;
      } else {
        // drease answer
        ans -= word.length;
        break;
      }
    }
    ans += word.length;
  }

  return ans;
};
// Runtime 185ms
// Memory 57.41MB
// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/submissions/1206728544?envType=daily-question&envId=2024-03-17

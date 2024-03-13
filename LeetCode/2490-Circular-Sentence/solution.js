/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  let sentenceSplit = sentence.split(' ');
  let lastFirstEqual =
    sentenceSplit[sentenceSplit.length - 1].slice(-1) ===
    sentenceSplit[0].charAt(0)
      ? true
      : false;
  let lastCharacterFirstCharacter = false;
  if (sentenceSplit.length === 1) {
    if (sentenceSplit[0].slice(-1) === sentenceSplit[0].charAt(0)) {
      return true;
    }
    return false;
  }
  for (let i = 0; i < sentenceSplit.length - 1; i++) {
    if (sentenceSplit[i].slice(-1) === sentenceSplit[i + 1].charAt(0)) {
      lastCharacterFirstCharacter = true;
    } else {
      lastCharacterFirstCharacter = false;
      break;
    }
  }

  if (lastFirstEqual === true && lastCharacterFirstCharacter === true) {
    return true;
  }
  return false;
};
// Runtime 52ms
// Memory 49.52MB
// https://leetcode.com/problems/circular-sentence/submissions/1202392162

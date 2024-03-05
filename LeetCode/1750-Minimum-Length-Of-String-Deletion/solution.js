/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  let arr = s.split("");
  let left = 0;
  result = arr.length;
  let right = s.length - 1;

  // delete until meet in middle or no longer similar
  while (left < right && s[left] === s[right]) {
    var currentChar = s[left];

    // delete consecutive occurences from prefix
    while (left <= right && s[left] === currentChar) {
      left++;
    }

    // delete occurences from suffix
    while (left <= right && s[right] === currentChar) {
      right--;
    }
  }
  return right - left + 1;

  // 2 pointers start and end
  // increase start and decrease end depending on if they are the same and have not converged
  // return number showcasing the differernce between start and end - showing remaining letters
};

// Runtime 68ms
// Memory 56.31MB

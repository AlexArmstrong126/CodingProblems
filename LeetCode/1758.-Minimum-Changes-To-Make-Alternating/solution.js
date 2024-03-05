/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  // Count flips needed to make the string same as 'next'
  const countFlips = (str, nextChar) => {
    let count = 0;
    for (const char of str) {
      if (nextChar !== char) {
        count++;
      }
      nextChar = nextChar === "0" ? "1" : "0";
    }
    return count;
  };

  // Calculate minimum operations to make the string alternating
  const result0 = countFlips(s, "0");
  const result1 = countFlips(s, "1");
  return Math.min(result0, result1);
};

// Runtime 58ms
// Memory 50.80MB

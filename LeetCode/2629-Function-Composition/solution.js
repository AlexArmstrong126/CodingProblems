/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    var final = x;
    var reversefunction = functions.reverse();
    for (let i = 0; i < functions.length; i++) {
      final = reversefunction[i](final);
    }
    return final;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
// Runtime 59ms
// Memory 50.33MB

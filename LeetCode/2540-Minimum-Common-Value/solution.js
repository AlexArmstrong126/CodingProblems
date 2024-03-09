/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  // set pointers
  var point1 = 0;
  var point2 = 0;

  //   loop through arrays until the smaller one is completed
  while (point1 < nums1.length && point2 < nums2.length) {
    // if element in first array is less, move to the next element by increasing the pointer
    if (nums1[point1] < nums2[point2]) {
      point1++;
      // if element in second array is less, move to the next element by increasing the pointer
    } else if (nums1[point1] > nums2[point2]) {
      point2++;
      //   if both are equal return the current element
    } else {
      return nums1[point1];
    }
  }
  return -1;
};

// Runtime 61ms
// Memory 56.34MB

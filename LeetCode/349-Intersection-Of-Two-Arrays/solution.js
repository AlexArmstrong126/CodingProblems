/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const resultSet = new Set([...set1].filter((x) => set2.has(x)));
  return Array.from(resultSet);

  // ***Second Approach***
  // set = new Set()
  // const array1 = nums1.sort();
  // const array2 = nums2.sort();
  // let i = 0
  // let j = 0
  // while(i < array1.length && j < array2.length){
  //     if(array1[i] === array2[j]){
  //        set.add(array1[i])
  //         i++
  //         j++
  //     }
  //     // increase i
  //    else if(array1[i] < array2[j]){
  //         i++
  //     }
  //     // increase j
  //     else{
  //         j++
  //     }
  // }
  // return Array.from(set)
};

// Runtime 52ms
// Memory 51.36MB

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  let smallestString = '';
  const alphabhets = 'abcdefghijklmnopqrstuvwxyz';

  var traverse = function (node, currentString) {
    if (!node) return;
    const str = `${alphabhets[node.val]}${currentString}`;
    if (!node.left && !node.right) {
      smallestString =
        !smallestString || smallestString > str ? str : smallestString;
    }
    if (node.left) {
      traverse(node.left, str);
    }
    if (node.right) {
      traverse(node.right, str);
    }
  };

  traverse(root, '');
  return smallestString;
};
// Runtime 60ms
// Memory 53.92MB
// https://leetcode.com/problems/smallest-string-starting-from-leaf/submissions/1235109844

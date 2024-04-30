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
 * @return {number}
 */
var sumNumbers = function (root) {
  let sum = 0;

  var traverse = function (node, num) {
    num += node.val;
    if (node.left) {
      traverse(node.left, num);
    }
    if (node.right) {
      traverse(node.right, num);
    }
    if (node.left === null && node.right === null) {
      sum += +num;
    }
  };

  traverse(root, '');
  return sum;
};
// Runtime 56ms
// Memory 50.50MB
// https://leetcode.com/problems/sum-root-to-leaf-numbers/submissions/1233414195

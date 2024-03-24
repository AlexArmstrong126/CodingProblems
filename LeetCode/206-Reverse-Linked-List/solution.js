/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let n = head;
  while (n !== null) {
    let next = n.next;
    n.next = prev;
    prev = n;
    n = next;
  }
  //   Returns head of new reversed list
  return prev;
};
// Runtime 68ms
// Memory 52.02MB
// https://leetcode.com/problems/reverse-linked-list/submissions/1209564037?envType=daily-question&envId=2024-03-21

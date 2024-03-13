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
var removeZeroSumSublists = function (head) {
  let front = new ListNode(0, head);
  let start = front;

  // loop through linked list from node before the start of each sequence
  while (start !== null) {
    let sumPrefix = 0;
    // initalise the end of current sequence
    let end = start.next;

    // loop through rest of the nodes in the list
    while (end !== null) {
      sumPrefix += end.val;

      if (sumPrefix === 0) {
        // if the sum is zero we remove the consecutive sequence
        // Connect the node before the sequence (start) to the node after the end of the sequence (end.next)
        start.next = end.next;
      }
      // set end aswell
      end = end.next;
    }
    start = start.next;
  }
  // Points to the head of the final linked list
  return front.next;
};
// Runtime 61ms
// Memory 51.29MB
// https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/submissions/1202004755

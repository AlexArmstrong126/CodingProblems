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
var middleNode = function (head) {
  let fast = head;

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    head = head.next;
  }
  return head;
};

// Runtime 55ms
// Memory 48.84MB

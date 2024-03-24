/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  // 2 pointers
  let slow = 0;
  let fast = 0;
  // Split list into 3 - start -> Middle (Remove) -> End
  var splitList = function (list, a, b) {
    let dummy = new ListNode(0);
    dummy.next = list;
    let before = dummy;

    // Move before pointer to the node before the start index
    for (let i = 0; i < a; i++) {
      before = before.next;
    }

    let after = before;

    // Move after pointer to the node at the end index
    for (let i = a; i <= b; i++) {
      after = after.next;
    }

    // Disconnect the middle part
    before.next = null;

    return [dummy.next, after.next];
  };
  var list = splitList(list1, a, b);
  var listStart = list[0];
  var listEnd = list[1];

  // Add join start sub list with list 2 and end of list one
  var mergeLists = function (listStart, listEnd, list2) {
    // create dummy node to serve as the head
    let dummy = new ListNode(0);
    // create current to tranverse through the list
    let current = dummy;

    // connect start of new list to dummy node
    current.next = listStart;

    // Tranverse until at the end of the first part of the merged list

    while (current.next !== null) {
      current = current.next;
    }

    // Connect middle/second list to dummy node
    current.next = list2;

    // Repeat the same as the first list
    while (current.next !== null) {
      current = current.next;
    }

    // Connect the final list to the end
    current.next = listEnd;

    // Return the head of the merged linked list
    return dummy.next;
  };

  return mergeLists(listStart, listEnd, list2);
};
// Runtime 142ms
// Memory 62.07MB
// https://leetcode.com/problems/merge-in-between-linked-lists/submissions/1209536206?envType=daily-question&envId=2024-03-20

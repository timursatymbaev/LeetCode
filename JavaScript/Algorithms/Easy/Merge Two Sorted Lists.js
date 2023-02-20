/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode();
    let current = head;
    let current1 = list1;
    let current2 = list2;

    while (current1 && current2) {
        if (current1.val < current2.val) {
            current.next = current1; // point new list in node
            current1 = current1.next; // advance pointer to next element of first list
        } else {
            current.next = current2; // point new list in node
            current2 = current2.next; // advance pointer to next element of second list
        }
        current = current.next;
    }

    if (current1) {
        current.next = current1;
    }

    if (current2) {
        current.next = current2;
    }

    return head.next;
};

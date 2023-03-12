/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
    if (lists.length === 0) return null;

    while (lists.length > 1) {
        let list1 = lists.shift();
        let list2 = lists.shift();
        let mergedList = merge(list1, list2);
        lists.push(mergedList);
    }

    return lists[0];
}

function merge(list1, list2) {
    let dummyHead = new ListNode(-1);
    let current = dummyHead;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummyHead.next;
}

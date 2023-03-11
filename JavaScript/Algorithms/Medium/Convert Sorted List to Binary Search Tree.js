/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
function sortedListToBST(head) {
    // Helper function to find the middle node of a linked list
    function findMiddle(head, tail) {
        let slow = head;
        let fast = head;

        while (fast !== tail && fast.next !== tail) {
            fast = fast.next.next;
            slow = slow.next;
        }

        return slow;
    }

    // Helper function to build the BST from the linked list
    function buildBST(head, tail) {
        if (head === tail) {
            return null;
        }

        let middle = findMiddle(head, tail);

        let node = new TreeNode(middle.val);
        node.left = buildBST(head, middle);
        node.right = buildBST(middle.next, tail);

        return node;
    }

    return buildBST(head, null);
}

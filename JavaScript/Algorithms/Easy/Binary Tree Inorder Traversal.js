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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    function trav(head, result) {
        if (head === null) {
            return head;
        }

        trav(head.left, result);

        result.push(head.val);

        trav(head.right, result);  
    }

    let result = [];
    trav(root, result);
    return result;
};

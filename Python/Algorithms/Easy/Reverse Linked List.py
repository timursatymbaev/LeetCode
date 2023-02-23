# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        previous = None
        next = None
        current = head
        
        while current != None:
            next = current.next
            current.next = previous
            previous = current
            current = next

        return previous

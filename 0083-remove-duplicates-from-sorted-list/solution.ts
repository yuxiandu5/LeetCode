function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(head === null) {
        return head
    }
        
    let cur = head

    while(cur.next) {
        if(cur.val === cur.next.val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }

    return head
};

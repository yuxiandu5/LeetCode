// return ListNode

// 1. declare an empty ListNode to start with 
// 2. declare a cur Node
// 3. loop while list1 !== null || list2 !== null
// 4. compare the next node for each list
//     cur.next = smaller.next
//     smaller = smaller.next
// 5. return dummy.next

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0)
    let cur = dummy

    while(list1 !== null && list2 !== null) {
        if(list1.val <= list2.val) {
            cur.next = list1
            list1 = list1.next
        } else {
            cur.next = list2
            list2 = list2.next
        }
        cur = cur.next
    }

    cur.next = list1 === null ? list2 : list1

    return dummy.next
};

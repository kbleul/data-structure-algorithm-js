const LinkedList = require("../../LinkedList/LinkedList.js")

    // Utility function to get the middle
    // of the linked list
    const getMiddle = head => {
        if (head == null)
            return head;
 
        let slow = fast = head;
 
        while (fast.next != null && fast.next.next != null)
        {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    function sortedMerge( leftnode,  rightnode)
    {
        var result = null;
        /* Base cases */
        if (leftnode == null)
            return rightnode;
        if (rightnode == null)
            return leftnode;
 
        /* Pick either leftnode or rightnode, and recur */
        if (leftnode.val <= rightnode.val) {
            result = leftnode;
            result.next = sortedMerge(leftnode.next, rightnode);
        } else {
            result = rightnode;
            result.next = sortedMerge(leftnode, rightnode.next);
        }
        return result;
    }
 
    const  mergeSort = head => {
        // Base case : if head is null
        if (head == null || head.next == null) return head;
        
 
        // get the middle of the list
        var middle = getMiddle(head);
        var nextof_middle = middle.next;
 
        // set the next of middle node to null
        middle.next = null;
 
        // Apply mergeSort on left list
        var left = mergeSort(head);
 
        // Apply mergeSort on right list
        var right = mergeSort(nextof_middle);
 
        // Merge the left and right lists
        var sortedlist = sortedMerge(left, right);
        return sortedlist;
    }

  let list = LinkedList.fromArray(200,40,55,698,15,48,69,75,21,1000,254,58,977,12,3644,55,47,558,94,154,245,874,55,68);

    list.print()
    list.print(mergeSort(list.getAtHead()))
    //console.log(`middle : ${getMiddle(list.getAtHead()).value}` )



 
 class DLinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insertAtHead = val => {
        if(this.length === 0) {
            const newnode = new NewNode(null, val , null)

            this.head = newnode
            this.length++
            return
        }

        if(this.length === 1) {
            let oldhead = this.head

            const newnode = new NewNode(null, val , this.head)


            this.head.prev = newnode
            this.head = newnode
            this.length++
            return

        }
    }

    getSize = () => { return this.length; }
 }


 DLinkedList.fromArray = (...values) => {
     const dlist = new DLinkedList()
     for(let val of values.reverse()) {
         dlist.insertAtHead(val)
     }

           return dlist
 }

 class NewNode {
     constructor(prev, val , next) {
         this.prev = prev
         this.val = val
         this.next = next
     }
 }

 module.exports = DLinkedList
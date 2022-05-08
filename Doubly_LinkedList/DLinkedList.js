
class DLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

   insertAtHead = value => { //dll - doubly linked list
    if(this.length === 0)
       {
           const dll = new LinkedListNode(null,value,null)
           this.head = dll;
           this.length++
           return 0
       }
    
       let next = this.head;

    const dll = new LinkedListNode(null,value,next)
    this.head = dll
    this.length++
    }

    insertAtIndex = (index,value) => {
        if(index < 0 || index > this.length) return null
        if(index === 0 ) return this.insertAtHead(value)

        let current = this.head;

         for(let i = 0 ; i <= index ; i++) {
            current = current.next
         }

         let prev = current.prev
         const dll = new LinkedListNode(prev,value,current)

         current.prev = dll
         prev.next = dll

         this.length++
    }

    getAtHead = () => {
        if(this.length === 0) return null
        return this.head.value
    }

}

     //utitlity function to create linkedlist from array
DLinkedList.fromArray = (...values) => {
const dll = new DLinkedList();
const reversedArray = values.reverse();

for(let val of reversedArray) {
    dll.insertAtHead(val);
}

return dll;
}

class LinkedListNode {
    constructor(prev,value,next) {
        this.value = value
        this.prev = prev
        this.next = next
    }
}

module.exports = DLinkedList
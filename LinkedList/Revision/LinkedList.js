
class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insertAtHead = val => {
        if(this.length === 0) {
            const newnode = new NewNode(val,null);
            this.head = newnode
            this.length++
            return 0
        }

            this.head = new NewNode(val, this.head)
            this.length++
            return 0
    }

    insertAtTail = val => {
        if(this.length === 0) return this.insertAtHead(val)

        let currenthead = this.head;

        while(currenthead.next) {
            currenthead = currenthead.next;
        }

        const newnode = new NewNode(val,null)
        currenthead.next = newnode;

            this.length++

    }

    insertAtIndex = (val , index) => {
        if(index === 0) return this.insertAtHead(val)

        if(index < 0 || index > this.length) return undefined

        if(index === this.length - 1) return this.insertAtTail(val)

        let currenthead = this.head;

         for(let i = 0 ; i < index-1 ; i++) {
            currenthead = currenthead.next; 
         }

         const newnode = new NewNode(val,currenthead.next)
         currenthead.next = newnode;
         this.length++

    }

    getAtHead = () => {  return this.head.value  }

    getAtTail = () => {
         if(this.length === 0) return null

        let currenthead = this.head
         
          while(currenthead.next) { currenthead = currenthead.next; }

          return currenthead.value;
    }

    getAtIndex = index => {
        if(index >= this.length || index < 0) return undefined
        let currenthead = this.head

        for(let i = 1 ; i <= index ; i++) { currenthead = currenthead.next; }

        return currenthead.value;
    }

    removeAtHead = () => {
        if(this.length === 0 ) return undefined

        if(this.length === 1 ) {
            this.head = null
            this.length = 0
            return 0
        }

          this.head = this.head.next
          this.length--
    }

    removeAtTail = () => {
        if(this.length === 0 ) return undefined

        if(this.length === 1 ) {
            this.head = null
            this.length = 0
            return 0
        }

           let currenthead = this.head;

        for(let i = 0 ; i < this.length - 2 ; i++) {
            currenthead = currenthead.next;
        }
console.log(currenthead)
            currenthead.next = null;

            this.length--
    }

    removeAtIndex = index => {
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.removeAtHead()
        if(index === this.length - 1) return this.removeAtTail()

        let currenthead = this.head

        for(let i = 0 ; i < index -1 ; i++) {  currenthead = currenthead.next;  }

        let toberemoved = currenthead.next;

        currenthead.next = currenthead.next.next
        toberemoved.next = null 
        this.length--
    }

    print = () => {
        if(this.length === 0 ) {
            console.log("Empty list.")
            return 0;
        } 
    
        let currenthead = this.head;
        let output = this.head.value + " -> ";
    
        while(currenthead.next) { 
            currenthead = currenthead.next;
            output += currenthead.value + " -> ";
        }
    
            console.log( output + "null");
    }

    getSize = () => { return this.length; }
}

LinkedList.fromArray = (...values) => {
    const list = new LinkedList()

    for(let val of values.reverse())
   {  list.insertAtHead(val) }

      return list
}


 class NewNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
 }

 module.exports = LinkedList
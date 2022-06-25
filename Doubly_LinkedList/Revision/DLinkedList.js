 
 class DLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    insertAtHead = val => {
        if(this.length === 0) {
            const newnode = new NewNode(null, val , null)

            this.head = newnode
            this.tail = newnode

            this.length++
            return
        }

            let oldhead = this.head

            const newnode = new NewNode(null, val , oldhead)

            this.head = newnode
            oldhead.prev = this.head
            this.length++

    }

    insertAtTail = val => {
        if(this.length === 0) return this.insertAtHead(val)

        let currenthead = this.head;

        while(currenthead.next) { currenthead = currenthead.next; }

        const newnode = new NewNode(currenthead, val , null)
        currenthead.next = newnode;
        this.tail = newnode
        this.length++
    }

    insertAtIndex = (index, val) => {
        if(index < 0 || index >  this.length) return undefined
        if(index === 0) return this.insertAtHead(val)
        if(index === this.length) return this.insertAtTail(val)

          let atindex = this.head;

          for(let i = 1 ; i <= index ; i++) {
            atindex = atindex.next
          }

          let previous = atindex.prev
          let newnode = new NewNode(previous, val , atindex)
          previous.next = newnode
          atindex.prev = newnode

          this.length++
    }

    removeAtHead = () => {
        if(this.length === 0) return null

        if(this.length === 1) {
            this.head = null
            this.tail = null

            this.length = 0
            return 0
        }

       let newhead =  this.head.next
       this.head = newhead
       newhead.prev.next = null
       this.head.prev = null
       this.length--
    }

    removeAtTail = () => {
        if(this.length === 0 || this.length === 1) return this.removeAtHead()

        let oldtail = this.tail
        this.tail = this.tail.prev
        this.tail.next = null
        oldtail.prev = null
    }

    removeAtIndex = index => {
        if(index < 0 || index >= this.length) return undefined
        if(this.length === 0) return null

        if(this.length === 1) return this.removeAtHead()

        let currenthead = this.head;

     
            for(let i = 1 ; i <= index ; i++) {
                currenthead = currenthead.next;
            }

            if(index === this.length - 1) {
                let previous = currenthead.prev
                previous.next = null
                currenthead.prev = null
                this.tail = previous
            }

            else {
    
            let previous = currenthead.prev
            previous.next = currenthead.next
            currenthead.next.prev = previous.next
            currenthead.next = currenthead.prev = null
            }
            this.length--
        
    }
 

    getAtHead = () => { 
        if(this.length === 0) return null
        return this.head.val 
    }

    getAtTail = () => {
        if(this.length === 0) return null
        return this.tail.val 
    }


    getAtIndex = index => {

        if(index >= this.length || index < 0) return undefined

        if(index === 0 && (this.length >= 1) )
         return this.getAtHead()

        if(this.length === index + 1) return this.getAtTail()

        if(this.length - index >= index ) {
        let currenthead = this.head

        for(let i = 1 ; i <= index ; i++) {  currenthead = currenthead.next; }
console.log("normal")
        return currenthead.val;
        }

        else {
            let currenttail = this.tail
            console.log("reverse")
        for(let i = 0 ; i < (this.length - index) - 1 ; i++) 
            { 
                 currenttail = currenttail.prev; }

        return currenttail.val
        }

    }

    print = () => {
        if(this.length === 0)
        { 
            console.log( "Empty list \n -------------------------------\n")
               return 
        }
        if(this.length === 1) {
             console.log(`${this.head.val} -> null \n -------------------------------\n`)
             return
        }

        let currenthead = this.head;
        let output = "";

        while(currenthead.next) { 
            output += ` ${currenthead.val} -> `
            currenthead = currenthead.next; 
        }

          output +=  currenthead.val + " -> null \n -------------------------------\n"

          console.log(output)
    }

    printReverse = () => {
        if(this.length === 0)
        { 
            console.log( "Empty list \n -------------------------------\n")
               return 
        }
        if(this.length === 1) {
             console.log(`${this.head.val} -> null \n -------------------------------\n`)
             return
        }

        let currenttail = this.tail;
        let output = "";

        while(currenttail.prev) { 
            output += ` ${currenttail.val} -> `
            currenttail = currenttail.prev; 
        }

          output +=  currenttail.val + " -> null \n -------------------------------\n"

          console.log(output)
       
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
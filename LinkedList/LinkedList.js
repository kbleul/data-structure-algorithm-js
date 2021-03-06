 class LinkedList {
     constructor() {
         this.head = null
         this.length = 0
     }

     getSize = () => { return this.length; }

     insertAtHead = value => {
            const newnode = new LinkedListNode(value,this.head)

            this.head = newnode;
            this.length++
     }

     insertAtTail = value => {

        if(this.length === 0 ) return this.insertAtHead(value)

        const newnode = new LinkedListNode(value,null)

        let currenthead = this.head;

        if(this.length === 1) {
            this.head.next = newnode;
            this.length++
            return true
        }

         for(let i = 1 ; i < this.length; i++)
         {
                currenthead = currenthead.next;
         }

         currenthead.next = newnode;
         this.length++
     }

     insertAtIndex = (index, value) => {
        if(index === 0) return this.insertAtHead();
        if( index < 0 || index >= this.length) return null

        let currenthead = this.head;
        for(let i = 0; i<index ; i++) {
            currenthead = currenthead.next;
        }

        const newnode = new LinkedListNode(value,currenthead.next)
        currenthead.next = newnode;

        this.length++;

     }

     getAtHead = () => {
         return this.head;
     }

     getAtIndex = index => {

        if(index === 0)  return this.getAtHead(); 
        if(index < 0 || index >= this.length)  return null; 

        let currentvalue = this.head;

        for(let i = 1 ; i <= index ; i++ ){  currentvalue = currentvalue.next;  }

             return currentvalue;
     }    

     removeAtHead = () => {
         if(this.head === null) return null

         if(this.length === 1) {
             const oldhead = this.head.value
             this.head = null
             this.length = 0
             return oldhead
         }

         const oldhead = this.head.value
         this.head = this.head.next;
         this.length--

         return oldhead
     }

     removeAtIndex = index => {
         if(index === 0) return this.removeAtHead()
         if(index < 0 || index >= this.length) return null
   
         let prev = this.getAtIndex(index-1)
         let next = prev.next;

            prev.next = next.next
            next.next = null
            this.length--

            return next.value

     }

     //utitlity function printout linkedlist
     print = (root = this.head) => {
         let output = "";
         let currenthead = root;

         for(let i = 0 ; i < this.length; i ++){
            if(i === 0)  {     output += `${currenthead.value}`}
            else {
                currenthead = currenthead.next;

                if(currenthead){ output += `->${currenthead.value}`;}
               
            }
             
         }
         console.log(output+ '->null');
     }


     //mimicks array splice function wher it takes two parameter to 
     // slice the list and return the new list
     
     /*the orignal list is not affected it will just create a new
       list based on the paraments passed */

     spliceList = (startIndex, endIndex) => {
         if(startIndex < 0 || startIndex >= this.length || endIndex < 0 || endIndex > this.length || startIndex >= endIndex) return undefined

         let startel = this.head;

         for(let i = 1 ; i <= startIndex; i++) {
            startel = startel.next
         }

         let newlist = new LinkedList();

         for(let i = 0 ; i < endIndex - startIndex ; i++) {
            newlist.insertAtTail(startel.value)
            startel = startel.next
         }

         return newlist;

     }
 } 


 
LinkedList.fromArray = (...values) => {
   
    const list = new LinkedList()
    for(let i of values.reverse()) {
        list.insertAtHead(i)
    }
    return list
}


 class LinkedListNode {
     constructor(value, next) {
         this.value = value
         this.next = next
     }
 } 

 module.exports = LinkedList
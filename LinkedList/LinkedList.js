 class LinkedList {
     constructor() {
         this.head = null
         this.length = 0
     }

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
         this.head.next = this.head.next;
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
     print = () => {
         let output = "";
         let currenthead;

         for(let i = 0 ; i < this.length; i ++){
            if(i === 0)  {   currenthead = this.head;  output += `${currenthead.value}`}
            else {
                currenthead = currenthead.next;

                if(currenthead){ output += `->${currenthead.value}`;}
               
            }
             
         }
         console.log(output+ '->null');
     }

 } 


 



 class LinkedListNode {
     constructor(value,next) {
         this.value = value
         this.next = next
     }
 } 

 module.exports = LinkedList
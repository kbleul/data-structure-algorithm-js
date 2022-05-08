const LinkedList = require('./LinkedList');

//a function to reverse a linkedlist
const reverseList = list => {

   let curr = list.head
   let prev = null;
   let next = null;

   while(curr) {

      next = curr.next
      curr.next = prev
      prev = curr;
      curr = next

   }

   let output = "";
       while(prev) {
       output += prev.value + "->";
       prev = prev.next
       }

   return output + "null";
}

   const ll = LinkedList.fromArray(50,900,74,35,126,24,2545,55,241,2589,55);

   

   ll.insertAtTail(1);


   ll.print();

   const reversedlist = reverseList(ll)
  console.log(reversedlist)



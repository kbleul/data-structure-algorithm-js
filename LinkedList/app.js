const LinkedList = require('./Revision/LinkedList');

//a function to reverse a linkedlist
// const reverseList = list => {

//    let curr = list.head
//    let prev = null;
//    let next = null;

//    while(curr) {

//       next = curr.next
//       curr.next = prev
//       prev = curr;
//       curr = next

//    }

//    let output = "";
//        while(prev) {
//        output += prev.value + "->";
//        prev = prev.next
//        }

//    return output + "null";
// }

//    const ll = LinkedList.fromArray(50,900,74,35,126,24,2545,55,241,2589,55);

   

//    ll.insertAtTail(1);


//    ll.print();

//    const reversedlist = reverseList(ll)
//   console.log(reversedlist)


      let ll = new LinkedList();

      ll.insertAtHead(20)

      //console.log(ll)

      ll = LinkedList.fromArray(80,4)
      //console.log(ll)

    //  ll.insertAtTail(10)
      //console.log(ll)

      //console.log("-----------------------")

      // ll.insertAtIndex(44,1)
      // ll.insertAtIndex(42.3,0)
      // ll.insertAtIndex(49,8)
      // ll.insertAtIndex(44,5)

     // console.log(ll)

      // ll.print()
      // console.log(ll.getSize())
      // ll.removeAtTail()
      // ll.print()
      // console.log(ll.getSize())
      // console.log(ll.removeAtTail())
      // ll.print()
      // console.log(ll.removeAtTail())
      // ll.print()
      // console.log(ll.removeAtTail())
      // ll.print()
      // console.log(ll.removeAtTail())
      // ll.print()

      // console.log(ll.getAtIndex(2))
      // console.log(ll.getAtIndex(1))
      // console.log(ll.getAtIndex(3))
      // console.log(ll.getAtIndex(4))
      // console.log(ll.getAtIndex(5))
      //  console.log(ll.getAtIndex(-1))
      //  console.log(ll.getAtIndex(6))
      //  console.log(ll.getAtIndex(0))

      //  ll.removeAtHead()
      // ll.print()
      //  ll.removeAtTail()
      // ll.print()
      // ll.removeAtTail()
      // ll.print()

      ll = LinkedList.fromArray(80,4,10,100,25,36)
      ll.print()

      ll.removeAtIndex(1)
      ll.print()

      ll.removeAtIndex(3)
      ll.print()   
      ll.removeAtIndex(0)
      ll.print()
      ll.removeAtIndex(3)
      ll.print()
      ll.removeAtIndex(-1)
      ll.print()

      ll.removeAtIndex(1)
      ll.print()

       ll.removeAtHead()
      // ll.removeAtHead()
      // ll.removeAtTail()


     console.log( ll.getSize() )
     console.log("-------------------")
     ll.print()
     ll.removeAtIndex(0)
     ll.print()






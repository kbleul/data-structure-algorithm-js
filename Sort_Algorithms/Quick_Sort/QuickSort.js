
//avaerage and best time complexity = nlogn 
//worst time complexity = n * n 
const LinkedList = require("../../LinkedList/LinkedList.js")

const quickSort = arr => {
        if(arr.length <= 1) return arr;

        let leftarr = []
        let rightarr = [];
        let pivot = arr.shift();

     arr.forEach(el => { el < pivot ? leftarr.push(el) : rightarr.push(el)  })


            leftarr = quickSort(leftarr)
            rightarr = quickSort(rightarr)


            return [...leftarr,pivot,...rightarr];
    }

   console.log(quickSort([6,600,58,41,755,6998,25,48,52,47,288,66,547,8,9,2,]))

    //sorting linked list linked list

    const quickSortList = list => {
        if(list.getSize() <= 1) return list;

        let leftlist = new LinkedList();
        let rightlist = new LinkedList();
        let pivot = new LinkedList();
          pivot.insertAtHead(list.getAtHead().value)

                 list.removeAtHead();

        let currenthead = list.head

        for(let i = 0 ; i < list.length; i ++){
            
         currenthead.value < pivot.head.value ? leftlist.insertAtHead(currenthead.value) 
                                        : rightlist.insertAtHead(currenthead.value)
                currenthead = currenthead.next
                 
             }



            leftlist = quickSortList(leftlist)
            rightlist = quickSortList(rightlist)

           if(leftlist.head !== null)
           { 
                      let templist = new LinkedList();

                      currenthead = leftlist.head
              for(let i = 0 ; i < leftlist.length; i ++){
                      templist.insertAtTail(currenthead.value)
                      currenthead = currenthead.next
              }
                      currenthead = pivot.head
              for(let i = 0 ; i < pivot.length; i ++){
                      templist.insertAtTail(currenthead.value)
                      currenthead = currenthead.next
              }
      
                     currenthead = rightlist.head
              for(let i = 0 ; i < rightlist.length; i ++){
                      templist.insertAtTail(currenthead.value)
                      currenthead = currenthead.next
              }
                         return templist;
           }
           else {

                let templist = new LinkedList();

                currenthead = pivot.head
        for(let i = 0 ; i < pivot.length; i ++){
                templist.insertAtTail(currenthead.value)
                currenthead = currenthead.next
        }

               currenthead = rightlist.head
        for(let i = 0 ; i < rightlist.length; i ++){
                templist.insertAtTail(currenthead.value)
                currenthead = currenthead.next
        }
                   return templist;
           }
    }


        const list = LinkedList.fromArray(50,45,0,889,54,7,88,56,8,54,598,87,8)

       list.print()
        quickSortList(list).print()


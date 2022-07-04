
const LinkedList = require("../../../LinkedList/LinkedList.js")

const mergeArrays = (leftarr , rightarr) => {
    let sortedArray = []

    while(leftarr.length > 0 && rightarr.length > 0) {
        if(leftarr[0] >= rightarr[0])
        { 
            sortedArray.push(rightarr[0])
            rightarr.shift()
        } else {
            sortedArray.push(leftarr[0])
            leftarr.shift()
        }
    }

    return [...sortedArray, ...leftarr , ...rightarr]
}

const mergeSort = arr => {

   if(arr.length <= 1) return arr

    let mid;

      arr.length % 2 === 0 ? mid = arr.length / 2 : mid = Math.ceil(arr.length/2)

        let leftarr = arr.splice(0 , mid)
        let rightarr = arr.splice(0, mid)

    return mergeArrays(mergeSort(leftarr), mergeSort(rightarr))
}


const mergeLists = (leftlist , rightlist) => {
    let sortedlist = new LinkedList();

    while(leftlist.getSize() > 0 && rightlist.length > 0) {
        if(leftlist.getAtHead() >= rightlist.getAtHead()) {
            sortedlist.insertAtHead(rightlist.getAtHead())
            rightlist.removeAtHead()
        } else {
            sortedlist.insertAtHead(leftlist.getAtHead())
            leftlist.removeAtHead()
        }
    }

    if(leftlist.getSize() > 0) { 
        let currenthead = leftlist.getAtHead()

        while(currenthead.next) {
            sortedlist.insertAtHead(currenthead.value)
            currenthead = currenthead.next
        }
        sortedlist.insertAtHead(currenthead.value)
    }

    if(rightlist.getSize() > 0) { 
        let currenthead = rightlist.getAtHead()

        while(currenthead.next) {
            sortedlist.insertAtHead(currenthead.value)
            currenthead = currenthead.next
        }
        sortedlist.insertAtHead(currenthead.value)
    }

    return sortedlist
}

const mergeSort_List = list => {
    if(list.getSize() <= 1) return list

    let mid;

        list.getSize() % 2 === 0 ? mid = list.getSize() / 2 : list = Math.ceil(list.getSize()/2)
 
        let leftlist = list.spliceList(0, mid)
        let rightlist = list.spliceList(mid, list.getSize() )

    return mergeLists(mergeSort_List(leftlist), mergeSort_List(rightlist))

}

let arr = [1000,5,24,154,33,69,8745,0,33,-1,57,-8,699,58,-996,55,0,22,1,1,1,1]
     
console.log(`Original : ${arr}`); 
console.log(`Sorted : ${mergeSort(arr)}`); 

  let mylist = LinkedList.fromArray(1000,5,24,154,33,69,8745,0,33,-1,57,-8,699,58,-996,55,0,22,1,1)

    mergeSort_List(mylist).print()

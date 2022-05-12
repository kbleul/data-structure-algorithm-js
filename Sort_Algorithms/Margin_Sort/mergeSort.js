
// Time complexity of Merge Sort is  θ(nLogn) in all 3 cases (worst, average and best) as merge sort always divides the array into two halves and takes linear time to merge two halves.
// Auxiliary Space: O(n)
// Algorithmic Paradigm: Divide and Conquer
// Stable: Yes
   const mergeArrays = (leftarr,rightarr) => {
       let sortedarr = [];

       while(leftarr.length > 0 && rightarr.length > 0) {
           if(leftarr[0] > rightarr[0]) {
               sortedarr.push(rightarr[0])
               rightarr.shift()
           }
           else {
               sortedarr.push(leftarr[0])
               leftarr.shift()
           }
       }


       //check for remaining elements on leftarr and rightarr
       return [...sortedarr,...leftarr,...rightarr]
   
   }


    const mergeSort = arr => {
        if(arr.length <= 1) return arr

        //middle index
        let mid;

        //left and right array
       
        arr.length % 2 === 0 ? mid = arr.length/2 : mid = Math.ceil(arr.length/2);

        let leftarr = arr.splice(0,mid)
        let rightarr = arr.splice(0,mid)
            

      return mergeArrays(mergeSort(leftarr), mergeSort(rightarr))


    }

let arr = [1000,5,24,154,33,69,8745,0,33,-1,57,-8,699,58,-996,55,0,22,1,1,1,1]
     
    console.log(`Original : ${arr}`); 
    console.log(`Sorted : ${mergeSort(arr)}`); 

    arr = [1]
     
    console.log(`Original : ${arr}`); 
    console.log(`Sorted : ${mergeSort(arr)}`); 


    arr = []
     
    console.log(`Original : ${arr}`); 
    console.log(`Sorted : ${mergeSort(arr)}`); 



 



    
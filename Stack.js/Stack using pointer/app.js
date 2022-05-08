const Stack = require("./stack.js")

 const mystack = Stack.fromArray(10,20,30,40,50)

 
   console.log(mystack.print())
   console.log(mystack.size + "\n")

   mystack.dequeue()
   console.log(mystack.print())
   console.log(mystack.size  + "\n")
   mystack.dequeue()
   console.log(mystack.print())
   console.log(mystack.size  + "\n")


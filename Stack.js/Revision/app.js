const Stack = require("./Stack.js")

    const mystack = new Stack()

    mystack.print()
    mystack.push(10)
    mystack.push(20)
    mystack.push(30)
    mystack.push(40)
    mystack.push(500)
    mystack.push(60)
    mystack.push(30)
    mystack.push(40)
    mystack.push(500)

mystack.print()
   console.log("size " +  mystack.getSize() )
   console.log("peek " +  mystack.peek())
   console.log("top " +  mystack.top())

     mystack.pop()
     mystack.pop()
   console.log("peek " +  mystack.peek())
   console.log("top " +  mystack.top())


     mystack.pop()
     mystack.pop()
   console.log("peek " +  mystack.peek())
   console.log("top " +  mystack.top())


     mystack.pop()
     mystack.pop()
   console.log("peek " +  mystack.peek())
   console.log("top " +  mystack.top())


     mystack.pop()
     mystack.pop()
   console.log("peek " +  mystack.peek())
   console.log("top " +  mystack.top())



   console.log("size " +  mystack.getSize() )



mystack.print()
 console.log(mystack.isEmpty())
 mystack.pop()
 console.log(mystack.isEmpty())

 mystack.print()
 mystack.push(10)
 mystack.push(20)
 mystack.push(30)
 mystack.push(40)
 mystack.push(500)
 mystack.push(60)
 mystack.push(30)
 mystack.push(40)
 mystack.push(500)

 mystack.clear()
 console.log(mystack.isEmpty())
 console.log(mystack.getSize())
 console.log(mystack.peek())
 console.log(mystack.top())

console.log("***********************************")
 mystack.print()
 console.log(mystack.contains(5))
 mystack.push(10)
 console.log(mystack.contains(10))

 mystack.push(20)
 mystack.push(30)
 mystack.push(40)
 mystack.push(500)
 mystack.push(60)
 mystack.push(30)
 mystack.push(40)
 mystack.push(500)

 console.log(mystack.contains(20))
 console.log(mystack.contains(30))
 console.log(mystack.contains(40))
 console.log(mystack.contains(50))

 console.log(mystack.contains(500))










const createStack = require("./stack.js")

  let mystack = createStack.fromArray("TPAB","MBTDF","RAM","Blonde", "Aquimeni","Sound & Color", "Kick & Push")

       console.log("size: " + mystack.size())
       console.log(mystack.isEmpty())
       console.log(mystack.peek())
       console.log(mystack.print())

       console.log(mystack.pop())
       console.log(mystack.print())
       console.log(mystack.peek())

       console.log("--------------------")
       console.log(mystack.contains())



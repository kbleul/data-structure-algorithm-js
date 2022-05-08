const Queue = require("./queue.js")

  let myque = Queue.fromArray(10,20,30,40,50)

    console.log(myque.print())

    console.log(myque.contains(40))
const Queue = require("./queue.js")

    const myque = new Queue();

    console.log(myque.size + "\n----------\n")

    console.log(myque.enqueue(10))
    console.log(myque.enqueue(200))
    console.log(myque.enqueue(50))
    console.log(myque.enqueue(600))
    console.log(myque.enqueue(520))
    console.log(myque.size + "\n----------\n")
    console.log(myque.print())
    

    console.log(myque.dequeue())
    console.log(myque.size + "\n----------\n")

    console.log(myque.print())



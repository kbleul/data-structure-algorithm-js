class Queue {
    constructor() {
        this.queue = [],
        this.counter = 0
    }

    enqueue = value => {
        this.queue.push(value)
        this.counter++
    }

    dequeue = () => {
        if(this.counter === 0) return null

        this.counter--
        return this.queue.shift()
    }

    contains = obj => {
        if(this.counter === 0 ) return null
        if(this.counter === 1 && this.queue[0] === obj) return this.queue[0]

        for(let val of this.queue) {
            if(val === obj) return val
        }

        return null
     }

     peek = () =>{ return this.queue[0] }

     print = () => {
         let output = ""
         for(let val of this.queue) {
            output = ` |   ${val}` +  output
         }

         return output
     }
    
}

Queue.fromArray = (...values) => {
    const myQueue = new Queue()
    for(let val of values) {
        myQueue.enqueue(val)
    }

    return myQueue;
}

module.exports = Queue
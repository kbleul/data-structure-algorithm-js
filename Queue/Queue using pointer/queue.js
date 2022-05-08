
class Queue {
    constructor() {
        this.head = null,
        this.tail = null,
        this.size = 0
    }

    enqueue = value => {
        if(this.size === 0 )
        {
        const newnode =  new newNode(value)

            this.head = this.tail = newnode;
            this.size++
            return value
        }
        const newnode =  new newNode(value)
            const temp = this.tail
        this.tail = newnode;
        temp.next = this.tail;
        this.size++
        return value
    }

    dequeue() {
        if(this.size === 0) return null
        
        if(this.size === 1) {
            let temp = this.tail
            this.tail = this.head = null
            this.size = 0
            return temp.value
        }

        let oldhead = this.head
        this.head = this.head.next;
        this.size--
        return oldhead.value


    }

    print(){
        let currenthead 
        let output = ""

        if(this.size === 0) return null
        for(let i = 0 ; i < this.size; i ++){
            if(i === 0)  {   currenthead = this.head;  output += `${currenthead.value}`}
            else {
                currenthead = currenthead.next;

                if(currenthead.value){ output = `${currenthead.value} | ` + output;}
               
            }
             
         }
         return output;
     }
    
}



Queue.fromArray = (...values) => {
    const myQueue = new Queue()
    for(let val of values) {
        myQueue.enqueue(val)
    }

    return myQueue;
}


class newNode {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

module.exports = Queue
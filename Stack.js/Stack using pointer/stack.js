
class Stack {
    constructor() {
        this.tail = null,
        this.size = 0,
        this.maxstack = 10
    }

    enqueue = val => {
        let newnode = new newNode(val)

        if(this.size === 0 ) {
            this.tail = newnode;
            this.size++
            return val
        }

        if(this.size === 10) return "Stack Overflow !!"

        let temp = this.tail
        this.tail = temp.next = newnode
        this.tail.prev = temp
        this.size++

        return val
    }

    dequeue = () => {
        if(this.size === 0) return null
        if(this.size === 1) {
            let temp = this.tail.value;
            this.tail.value = null
            this.size = 0
            return temp.value.value
        }

        let output = this.tail.value
       // let temp = this.tail.value.prev;
        this.tail.prev.value.next = null
        this.tail.value.prev = null
        this.tail = this.tail.value.prev

        this.size--
        return output.value

    }

    print() {
        let output = ""
        let currenttail = this.tail;

        for(let i = 0 ; i < this.size; i++) {
            output += `${currenttail.value.value}\n____________\n`;
            currenttail = currenttail.prev
        }

        return output
    }
}

Stack.fromArray = (...values) => {
    const mystack = new Stack();

    for(let value of values) {
        let newnode = new newNode(value)
        mystack.enqueue(newnode)
    }

    return mystack
}


class newNode {
    constructor(value) {
        this.value = value,
        this.next = this.prev = null
    }
}

module.exports = Stack
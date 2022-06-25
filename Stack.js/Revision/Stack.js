class createStack {
    constructor() {
        this.tail = null
        this.max = 10
        this.size = 0
    }

    push = val => {
        if(this.size === this.max)  {
        console.log("Stack Overflow")
        return "Stack Overflow"
        }

        if(this.size === 0) {
            const newnode = new NewNode(val , null)
            this.tail = newnode
            this.size++
            return
        }

        const newnode = new NewNode(val, this.tail)
        this.tail = newnode
        this.size++
    }

    pop = () => {
        if(this.size === 0) return null

        if(this.size === 1) {
            this.tail = null
            this.size = 0
            return
        }

        let oldtail = this.tail
        this.tail = oldtail.next
        oldtail.next = null
        this.size--
    }

    top = () => { 
        if(this.size === 0) return null
        return this.tail.val
    }


    peek = () => {
        if(this.size === 0 || this.size === 1) return this.top()

        let currenttail = this.tail

        while(currenttail.next) { currenttail = currenttail.next }

        return currenttail.val

    }

    isEmpty = () => { return this.size === 0 ? true : false }

    getSize = () => { return this.size }

    clear = () => {
        this.tail = null
        this.size = 0
    }

    contains = val => {
        if(this.size === 0) return false

        let currenttail = this.tail

        while(currenttail.next) { 
            if(currenttail.val === val ) return true
            currenttail = currenttail.next
        }

        return currenttail.val === val ? true : false
        
    }
    print = () => {
        if(this.size === 0) {
            console.log("Empty list");
            return
        }

        let currenttail = this.tail
        let output = ` ${this.tail.val} \n___________________\n`;

        while(currenttail.next) { 
            currenttail = currenttail.next 
            output +=  ` ${currenttail.val} \n___________________\n`

        }

        console.log(output)
    }
}

class NewNode{
    constructor(val,next) {
        this.val = val
        this.next = next
    }
}

module.exports = createStack
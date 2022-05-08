
class CreateStack {
    constructor() {
        this.stack = [],
        this.counter = 0,
        this.max = 10
    }

    push = value => {

        if(this.counter === this.max) return "Stack Overflow";

        this.stack.push(value)
        this.counter++
    }

    pop = () => {
        if(this.counter === 0) return undefined;

        this.counter--
              return this.stack.pop()
    }

    peek = () => {
        if(this.counter === 0) return null;

        return this.stack[0]
    }

    isEmpty = () => {
        if(this.counter === 0) return true
        return false
    }

    size = () => { return this.counter }

    print = () => {
       if(this.counter === 0) return null

        let output = "";

        for(let val of this.stack) {
            output = `\n________\n${val}  ` + output
        }

        return output
    }

    clear = () => {
        this.counter = 0;
        this.stack = []

        return true
    }

    contains = obj => {
        if(this.counter === 0) return null;
        if(this.counter === 1 && this.stack[0] === obj) return this.stack[0]

        for(let val of this.stack){
            if(val === obj) return val
        }

        return null
    }
}

CreateStack.fromArray = (...values) => {
    const stack = new CreateStack();
    for(let val of values) {
        stack.push(val);
    }

    return stack
}

module.exports = CreateStack;
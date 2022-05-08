const Stack = require("./stack.js")

describe("#enqueue", () => {
    test("inserts element into an empty stack", () => {
        const mystack = new Stack()

        expect(mystack.enqueue(10)).toBe(10)
        expect(mystack.size).toBe(1)
        expect(mystack.tail.next).toBeNull()

    })

    test("inserts elemnt into stack with size > 0", () => {
        const mystack = new Stack()
            mystack.enqueue(10)
            expect(mystack.enqueue(20)).toBe(20)
            expect(mystack.size).toBe(2)
            expect(mystack.tail.value).toBe(20)
    }) 

    test("stack overflow", () => {
        const mystack = Stack.fromArray(10,20,30,40,50,60,70,8,90,100)
        expect(mystack.size).toBe(10)
        expect(mystack.enqueue(500)).toBe("Stack Overflow !!")


    })
})

describe("#dequeue", () => {
    test("remove element from an empty stack", () => {
        const mystack = new Stack()

        expect(mystack.dequeue()).toBeNull()
        expect(mystack.size).toBe(0)
    })

    test("remove element from stack with size > 0", () => {
        const mystack = Stack.fromArray(10,20,30,40,50,60,70,8,90,100)

            expect(mystack.dequeue()).toBe(100)
            expect(mystack.size).toBe(9)

            expect(mystack.dequeue()).toBe(100)
            expect(mystack.size).toBe(8)

            expect(mystack.dequeue()).toBe(100)
            expect(mystack.size).toBe(7)
    }) 

})


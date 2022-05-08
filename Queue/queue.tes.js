const Queue = require("./queue.js")

describe("#enqueue", () => {
    test("insert element", () => {
        const tempque = new Queue()

        tempque.enqueue(10)
        expect(tempque.queue[0]).toBe(10)
    })
})

describe("#dequeue", () => {
    test("remove element", () => {
        const tempque = Queue.fromArray(10,20,30,40,50)

        expect(tempque.dequeue(10)).toBe(10)
        expect(tempque.queue[0]).toBe(20)
    })
})

describe("#peek", () => {
    test("returns head element", () => {
        const temp = new Queue()
        expect(temp.peek()).toBe(undefined)

        const tempque = Queue.fromArray(10,20,30,40,50)

        expect(tempque.peek()).toBe(10)
    })
})

describe("#conatins", () => {
    test("returns element if found in queue", () => {
        const temp = new Queue()
        expect(temp.contains(10)).toBeNull()
         temp.enqueue(10)
        expect(temp.contains(10)).toBe(10)


        const tempque = Queue.fromArray(10,20,30,40,50)

        expect(tempque.contains(50)).toBe(50)
    })
})
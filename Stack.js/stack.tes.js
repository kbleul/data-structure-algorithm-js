
const createStack = require("./stack.js")

describe("#push", () => {
    test("addes element into index 0", () => {
        let tempstack = new createStack();

        expect(tempstack.counter).toBe(0)

        tempstack.push(10);
        expect(tempstack.stack[0]).toBe(10)
        expect(tempstack.counter).toBe(1)

        tempstack.push(20);
        expect(tempstack.stack[1]).toBe(20)
        expect(tempstack.counter).toBe(2)

    })

    test("if stack overflow is reached",  () => {
        let tempstack = createStack.fromArray(10,20,30,40,50,60,70,80,90,100);

        expect(tempstack.push()).toBe("Stack Overflow")
    })
})

describe("#pop", () => {
    test("removes last added element", () => {
        let tempstack = new createStack();

        expect(tempstack.pop(0)).toBe(undefined)

         tempstack = createStack.fromArray(10,20,30,40,50)

        expect(tempstack.pop()).toBe(50)
        expect(tempstack.counter).toBe(4)
    })
})

describe("#peek", () => {
    test("stack is empty, returns null", () => {
        const tempstack = new createStack();

        expect(tempstack.peek()).toBeNull()
    })
    test("returns the first element inserted", () => {
        const tempstack = createStack.fromArray(10,20,30,40,50)

        expect(tempstack.peek()).toBe(10)

    })
})

describe("#isEmpty", () => {
   test("stack is empty", () => {
       const tempstack = new createStack();
            expect(tempstack.isEmpty()).toBe(true)
   })
   test("stack is not empty", () => {
    const tempstack = createStack.fromArray(10,20,30,40,50);
         expect(tempstack.isEmpty()).toBe(false)
})
})

describe("#clear", () => {
    test("clears stack", () => {
        const tempstack = new createStack();
        tempstack.clear()
            expect(tempstack.counter).toBe(0)
        const tempstack2 = createStack.fromArray(11,12,13)
        tempstack.clear()
        expect(tempstack.counter).toBe(0)
    })
})

describe("contains", () => {
    test("returns item if it's contained in stack", () => {
        let tempstack = createStack.fromArray(10,20,30,40,50)

           expect(tempstack.contains("appple")).toBeNull()
           expect(tempstack.contains(10)).toBe(10)
           expect(tempstack.contains("10")).toBeNull()

    })

    test("returns null because stack is empty and returns first element for stack with 1 item", ()=> {
        let tempstack = new createStack();
        expect(tempstack.contains("10")).toBeNull()
          tempstack.push("apple")
        expect(tempstack.contains("apple")).toBe("apple")

    })
})
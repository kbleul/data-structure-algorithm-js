const BST = require("./BST.js")

describe("#add", () => {
    test("addes node to tree when tree is empty", () => {
        const mytree = new BST();

        mytree.add(10)

        expect(mytree.root.value).toBe(10)
    })
    test("addes node to tree when tree is not empty", () => {
        const mytree = new BST();

        mytree.add(10)
        mytree.add(20)


        expect(mytree.root.right.value).toBe(20)
        mytree.add(5)
        expect(mytree.root.left.value).toBe(5)


    })
})

describe("#findMin", () => {
    test("returns the minimum value in tree", () => {
    const mytree = BST.fromArray(120,20,100,505,10,7,80,90,333)

        expect(mytree.findMin()).toBe(7)
        mytree.add(1)
        expect(mytree.findMin()).toBe(1)

    })

})

describe("#findMax", () => {
    test("returns the maximum value in tree", () => {
    const mytree = BST.fromArray(120,20,100,505,60,7,80,90,10)

        expect(mytree.findMax()).toBe(505)
        mytree.add(1000)
        expect(mytree.findMax()).toBe(1000)

    })

})

describe("#find", () => {
    test("tree is empty" , () => {
        const mytree = new BST();
        expect(mytree.find()).toBeNull()
    })

    test("tree is not empty but element is not found", () => {
        const mytree = BST.fromArray(120,20,100,505,60,7,80,90,10)
        expect(mytree.find(1000)).toBeNull()
        expect(mytree.find(30)).toBeNull()
    })
    test("tree is not empty and value is found", () => {
        const mytree = BST.fromArray(120,20,100,505,60,7,80,90,10)
        expect(mytree.find(100).value).toBe(100)
        expect(mytree.find(10).value).toBe(10)
    })
})

describe("#isPresent", () => {
    test("tree is empty" , () => {
        const mytree = new BST();
        expect(mytree.isPresent()).toBe(false)
    })

    test("tree is not empty but element is not found", () => {
        const mytree = BST.fromArray(120,20,100,505,60,7,80,90,10)
        expect(mytree.isPresent(1000)).toBe(false)
        expect(mytree.isPresent(30)).toBe(false)
    })
    test("tree is not empty and value is found", () => {
        const mytree = BST.fromArray(120,20,100,505,60,7,80,90,10)
        expect(mytree.isPresent(100)).toBe(true)
        expect(mytree.isPresent(10)).toBe(true)
    })
})
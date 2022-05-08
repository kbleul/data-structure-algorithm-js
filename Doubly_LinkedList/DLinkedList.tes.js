const DLinkedList = require("./DLinkedList")

describe("#insertAtHead", () => {
    test('should insert element at head / index 0', () => {
        const dll = new DLinkedList();
        dll.insertAtHead(5);
        expect(dll.head.value).toBe(5);
          expect(dll.head.prev).toBeNull();
          expect(dll.head.next).toBeNull();
        expect(dll.length).toBe(1)

        dll.insertAtHead(6);
        expect(dll.head.value).toBe(6);
          expect(dll.head.prev).toBeNull();
          expect(dll.head.next.value).toBe(5);
        expect(dll.length).toBe(2)
    })
})

describe("#getAtHead", () => {
    test("Get head element", () => {
        const dll = new DLinkedList();
        expect(dll.getAtHead()).toBeNull();

        const dll2 = DLinkedList.fromArray(10,20,30)
        expect(dll2.getAtHead()).toBe(10);

    })
})


describe("#insertAtIndex", () => {
    test("when index is 0", () => {
        const dll = DLinkedList.fromArray(10,20,30,40);
        dll.insertAtIndex(0,20)
        expect(dll.head.value).toBe(20)
        expect(dll.length).toBe(5);
    })

    test("when index is greater than length", () => {
        const dll = DLinkedList.fromArray(10,20,30,40);

        expect( dll.insertAtIndex(10,20)).toBeNull();
        expect(dll.length).toBe(4);
    })

    test("when index is less than 0", () => {
        const dll = DLinkedList.fromArray(10,20,30,40);
        
        expect( dll.insertAtIndex(-10,20)).toBeNull();
        expect(dll.length).toBe(4);
    })
    test("when index in the middle", () => {
        const dll = DLinkedList.fromArray(10,20,30,40);
            dll.insertAtIndex(2,50)
        expect(dll.length).toBe(5);
            dll.insertAtIndex(3,60)
        expect(dll.length).toBe(6);
            dll.insertAtIndex(2,70)
        expect(dll.length).toBe(7);


    })
})
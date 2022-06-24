const LinkedList = require("./LinkedList")

describe("#insertAtHead", () => {
    test('should insert element at head / index 0', () => {
        let list = new LinkedList();
        list.insertAtHead(10)

        expect(list.head.value).toBe(10)
        expect(list.head.next).toBeNull()
        expect(list.length).toBe(1)

    })
})

 const LinkedList = require("./LinkedList");

describe("#insertAtHead", () => {
     test('should insert element at head / index 0', () => { 
         const ll = new LinkedList();

         ll.insertAtHead(10);
          expect(ll.head.value).toBe(10);
          expect(ll.head.next).toBeNull();
          expect(ll.length).toBe(1);
         ll.insertAtHead(20);
          expect(ll.head.value).toBe(20);
          expect(ll.head.next.value).toBe(10);
          expect(ll.length).toBe(2);
      })
})

describe("#insertAtTail", () => {
    test('should insert element at the tail or last in the list', () => { 
        const ll = new LinkedList();

        ll.insertAtTail(10);
         expect(ll.head.value).toBe(10);
         expect(ll.head.next).toBeNull();
         expect(ll.length).toBe(1);
        ll.insertAtTail(20);
         expect(ll.head.value).toBe(10);
         expect(ll.head.next.value).toBe(20);
         expect(ll.length).toBe(2);
         ll.insertAtTail(30);
         expect(ll.head.value).toBe(10);
         expect(ll.head.next.value).toBe(20);
         expect(ll.head.next.next.value).toBe(30);
         expect(ll.head.next.next.next).toBeNull();
         expect(ll.length).toBe(3);
     })
})

describe("#insertAtIndex", () => {
    test("when index is 0", () => {
        const ll = LinkedList.fromArray(10,20,30,40);
        ll.insertAtIndex(0,20)
        expect(ll.length).toBe(5);
    })

    test("when index is greater than length", () => {
        const ll = LinkedList.fromArray(10,20,30,40);

        expect( ll.insertAtIndex(10,20)).toBeNull();
        expect(ll.length).toBe(4);
    })

    test("when index is less than 0", () => {
        const ll = LinkedList.fromArray(10,20,30,40);
        
        expect( ll.insertAtIndex(-10,20)).toBeNull();
        expect(ll.length).toBe(4);
    })
    test("when index in the middle", () => {
        const ll = LinkedList.fromArray(10,20,30,40);
            ll.insertAtIndex(1,50)
        expect(ll.length).toBe(5);
            ll.insertAtIndex(3,60)
        expect(ll.length).toBe(6);
            ll.insertAtIndex(2,70)
        expect(ll.length).toBe(7);


    })
})

describe("#getAtHead", () => {
      test("Get head element",() => {

    const ll = new LinkedList();

        expect(ll.getAtHead()).toBeNull();
    })
     
})

describe("#getAtIndex", () => {
    test("when index is 0", () => {
        const ll = LinkedList.fromArray(10,20,30,40);
        expect(ll.getAtIndex(0).value).toBe(10)
        expect(ll.length).toBe(4);
    })

    test("when index is greater than length", () => {
        const ll = LinkedList.fromArray(10,20,30,40);

        expect( ll.getAtIndex(10)).toBeNull();
        expect(ll.length).toBe(4);
    })

    test("when index is less than 0", () => {
        const ll = LinkedList.fromArray(10,20,30,40);
        
        expect( ll.getAtIndex(-1)).toBeNull();
        expect(ll.length).toBe(4);
    })
    test("when index in the middle", () => {
        const ll = LinkedList.fromArray(10,20,30,40);
           
        expect(ll.getAtIndex(1).value).toBe(20);
        expect(ll.getAtIndex(2).value).toBe(30);
        expect(ll.getAtIndex(3).value).toBe(40);


    })
})

describe("#removeAtHead", () => {
    test('remove from head / index 0 when list is empty' , () => { 
        const ll = new LinkedList();

         expect(ll.removeAtHead()).toBeNull();
     })

     test('remove from head / index 0 when list only has 1 element' , () => { 
        const ll =  LinkedList.fromArray(10);

         expect(ll.removeAtHead()).toBe(10);
        expect(ll.length).toBe(0)

     })

     test('remove from head / index 0 when list is not empty', () => {
        const ll = LinkedList.fromArray(10,20,30,40);
        
        expect(ll.removeAtHead()).toBe(10)
        expect(ll.length).toBe(3)
          
     //   expect(ll.removeAtHead()).toBe(20)
       // expect(ll.length).toBe(2)

     })
})

describe("#removeAtIndex", () => {
    test("when index is 0", () => {
        const ll = LinkedList.fromArray(10,20,30,40);

        expect(ll.removeAtIndex(0)).toBe(10);
    })

    test("when index is greater than length", () => {
        const ll = LinkedList.fromArray(10,20,30,40);

        expect(ll.removeAtIndex(4)).toBeNull();
        expect(ll.removeAtIndex(10)).toBeNull();
    })

    test("when index is less than 0", () => {
        const ll = LinkedList.fromArray(10,20,30,40);
        
        expect(ll.removeAtIndex(-1)).toBeNull();
        expect(ll.removeAtIndex(-10)).toBeNull();
    })
    test("when index in the middle", () => {
        const ll = LinkedList.fromArray(10,20,30,40);
        
        expect(ll.removeAtIndex(1)).toBe(20);
        expect(ll.removeAtIndex(1)).toBe(30);
        expect(ll.removeAtIndex(1)).toBe(40);
        expect(ll.removeAtIndex(0)).toBe(10);
        expect(ll.head).toBeNull();

    })
})

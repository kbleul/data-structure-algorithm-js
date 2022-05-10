const BST = require("./BST.js")

  const mytree = BST.fromArray(45,38,50,47,55,52,58,57,59)

    console.log(mytree.findMin())
    console.log(mytree.findMax())

/*

    console.log("----------leaf node---------------")


    mytree.delete(59)
    console.log(mytree.findMin())
    console.log(mytree.findMax())
    console.log("----------single node---------------")


    mytree.delete(58)

    console.log(mytree.findMin())
    console.log(mytree.findMax())
    console.log(mytree.find(55))
*/

console.log(mytree.inorder())

console.log("----------two childs---------------")
    mytree.delete(55)

    console.log(mytree.findMin())
    console.log(mytree.findMax())
    console.log(mytree.find(57))

    console.log("----------root node---------------")

    mytree.delete(58)

    console.log(mytree.findMin())
    console.log(mytree.findMax())
    console.log(mytree.find(57))



    
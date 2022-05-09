const BST = require("./BST.js")

  const mytree = BST.fromArray(10,20,30,40,50)

  mytree.inorder()
  mytree.delete(30)
  mytree.inorder()
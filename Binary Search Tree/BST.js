class BST {
    constructor(){
        this.root = null
    }

    add = val => {
        const newnode = new newNode(val)
        if(this.root === null) {
            this.root = newnode
            return newnode.value
        }
//a recursive function searches throught the tree and inserts element in the right spot
        const searchInsert_Tree = node => {
            if(val < node.value) {
                if(node.left === null)
                { 
                    node.left = newnode;
                    return newnode.value;
                }
                else { return searchInsert_Tree(node.left) }

            } else if(val > node.value) {

                if(node.right === null) {
                    node.right = newnode;
                    return newnode.value;
                }
                else { return searchInsert_Tree(node.right )}
            }
        }

      return  searchInsert_Tree(this.root)
    }

    findMin() {
        let current = this.root;

        while(current.left !== null) {
            current = current.left;
        }

        return current.value;
    }

    findMax() {
        let current = this.root;

        while(current.right !== null) {
            current = current.right;
        }

        return current.value;
    }

    find = val => {
    if(this.root === null) return null

       const searchTree = node => {
           if(node.value === val) return node

           if(val < node.value) {
               if(node.left === null) return null
               return searchTree(node.left)
           }
           if(val > node.value) {
            if(node.right === null) return null

            return searchTree(node.right)
        }
       }

       return searchTree(this.root)
    }

    isPresent = val => {
        if(this.root === null) return false

        const searchTree = node => {
            if(node.value === val) return true
 
            if(val < node.value) {
                if(node.left === null) return false
                return searchTree(node.left)
            }
            if(val > node.value) {
             if(node.right === null) return false
 
             return searchTree(node.right)
         }
        }
 
        return searchTree(this.root)
    }
}


BST.fromArray = (...values) => {

    const mytree = new BST();

    for(let value of values) {
        mytree.add(value)
    }

    return mytree;
}

class newNode {
    constructor(value, left = null , right = null) {
        this.value = value,
        this.left = left,
        this.right = right
    }
}

module.exports = BST
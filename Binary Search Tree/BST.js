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

    findMin(root) {

        let current
        if(root) {  current = root; }

        else {  current = this.root; }

        while(current.left !== null) {
            current = current.left;
        }

        return current.value;
    }

    findMax(root) {
        let current
        if(root) {  current = root; }

        else {  current = this.root; }

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

    delete = (root,val) =>  {
        let head;

         if(root) { head = root }
         else { head = this.root }


        if(head === null) return null;
 
        if(val < head.value) head.left = delete(head.left,val)
        else if(val > head.value) head.right = delete(head.right,val)

        else {
            if(head.left == null) return head.right
            else if(head.right == null) return head.left

            head.key = this.findMin(head.right)
            head.right = delete(head.right,head.value)
        }

        return head
    }

    inorder() {
        let output = "";
      const inorderRec = (root = this.root) => {

            if(root !== null) {
                inorderRec(root.left)
                    output += `${root.value  }`
                inorderRec(root.right)

            }
    console.log(output)

        }
        inorderRec()

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
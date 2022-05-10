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

        return current;
    }

    findMax(root) {
        let current
        if(root) {  current = root; }

        else {  current = this.root; }

        while(current.right !== null) {
            current = current.right;
        }

        return current;
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

    delete = val =>  {
        var prevnode = null;

      const removeNode = (node,val) => {
          
          if(node === null) return null;

          if(node.value === val ) {

            //is leaf node
          if(node.left === null && node.right === null) 
          { 
              if(prevnode.left.value === node.value)
                     { prevnode.left = null }
              else if(prevnode.right.value === node.value)
                     { prevnode.right = null }

             return null;  
        }
            
          //has one child
          if(node.left === null) 
          {
              node.value = node.right.value;
              node.right = null
              return 0
          }
          if(node.right === null) 
          {
            node.value = node.left.value;
            node.left = null
            return 0
          }

          //has two childNodes
          let tempnode = node.right

          while(tempnode.left !== null) {
              prevnode = tempnode
              tempnode = tempnode.left;
          }

          node.value = tempnode.value

          if(this.root === node.value) { previous.right = null; return 0 }
          prevnode.left = null
          return 0; 
          


          }

          else if(val < node.value) {
              prevnode = node;
            removeNode(node.left,val)
          } else { 
            prevnode = node;
            removeNode(node.right,val)
        }

      }
        removeNode(this.root,val)

    }

    inorder() {
       if(this.root === null) return null

       let result = [];
       const transever = node => {
           node.left && transever(node.left)
           result.push(node.data)
           node.right && transever(node.right)
       }
        transever(this.root)
        return result;

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
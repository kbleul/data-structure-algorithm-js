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

     /* Compute the "maxDepth" of a tree -- the number of
       nodes along the longest path from the root node
       down to the farthest leaf node.*/
       // Recursive Method

       //time complexity = 0(n)
        maxDepth(node = this.root)
       {
           if (node == null)
               return -1;
           else
           {
               /* compute the depth of each subtree */
               let lDepth = this.maxDepth(node.left);
               let rDepth = this.maxDepth(node.right);

               /* test
      console.log("value - " + node.value + "  ldepth" + lDepth)
      console.log("value - " + node.value + "  rdepth" + rDepth + "\n------------\n")  */


               /* use the larger one */
               if (lDepth > rDepth)
                   return (lDepth + 1);
                else
                   return (rDepth + 1);
           }
       }

       // Iterative method to find height of Binary Tree
       //time complexity = 0(n)

        treeHeight(node = this.root) {
 
    // Base Case
        if (node == null)
            return 0;
   
        // Create an empty queue for level order traversal
        let queue = [];
   
        // Enqueue Root and initialize height
        queue.push(node);
        let height = 0;
   
        while (1 == 1)
        {
            // nodeCount (queue size) indicates number of nodes
            // at current level.
            let nodeCount = queue.length;
            if (nodeCount == 0)
                return --height;
            height++;
   
            // Dequeue all nodes of current level and Enqueue all
            // nodes of next level
            while (nodeCount > 0)
            {
                let newnode = queue.shift();
                if (newnode.left != null)
                    queue.push(newnode.left);
                if (newnode.right != null)
                    queue.push(newnode.right);
                nodeCount--;
            }
        }
}



  //timeconplexity for all depth first transversal algorithms below = O(n)
  //space complexity = best case : 0(logn) worst case : o(n)

    postOrder(root = this.root) {
        if(root === null) return;

        this.postOrder(root.left)
        this.postOrder(root.right)

        console.log( root.value + " , ")

    }

    preOrder(root = this.root) {
        if(root === null) return;

        console.log( root.value + " , ")

        this.preOrder(root.left)
        this.preOrder(root.right)
    }


    inOrder(root = this.root) {
        if(root === null) return;

        this.inOrder(root.left)

        console.log( root.value + " , ")

        this.inOrder(root.right)


    }

     inorder()
    {
        if (this.root == null)
            return;
 
        var stack = [];
        var curr = this.root;
 
        // traverse the tree
        while (curr != null || stack.length > 0)
        {
 
            /*
             * Reach the left most Node of the curr Node
             */
            while (curr != null)
            {
             
                /*
                 * place pointer to a tree node on the stack before traversing the node's left
                 * subtree
                 */
                stack.push(curr);
                curr = curr.left;
            }
 
            /* Current must be NULL at this point */
            curr = stack.pop();
 
            console.log(curr.value + " ")
            /*
             * we have visited the node and its left subtree. Now, it's right subtree's turn
             */
            curr = curr.right;
        }
    }

    /* BFT - BREADTH FIRST TRANVERSAL print Level Order Traversal */
    /*
     * Given a binary tree. Print its nodes in level order using array for
     * implementing queue
     * 
     * //time and space complexity = o(n)
     */
     printLevelOrder() {
        var queue = [];
        queue.push(this.root);
        while (queue.length != 0) {
            /*
             * The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
             * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
             */
            var tempNode = queue.shift();
            console.log(tempNode.value + " ");
 
            /* Enqueue left child */
            if (tempNode.left != null) {
                queue.push(tempNode.left);
            }
 
            /* Enqueue right child */
            if (tempNode.right != null) {
                queue.push(tempNode.right);
            }
        }
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
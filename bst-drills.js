'use strict';
const BinarySearchTree = require('./bst');

//drill 3
let BST = new BinarySearchTree()
BST.insert(3)
BST.insert(1)
BST.insert(4)
BST.insert(6)
BST.insert(9)
BST.insert(2)
BST.insert(5)
BST.insert(7)

//console.log(BST)

// function tree(t){
//     if(!t){
//         return 0;
//     }
//     return tree(t.left) + t.key + tree(t.right)
// }

// console.log(tree(BST))


// let BST = new BinarySearchTree()
// BST.insert('E')
// BST.insert('A')
// BST.insert('S')
// BST.insert('Y')
// BST.insert('Q')
// BST.insert('U')
// BST.insert('E')
// BST.insert('S')
// BST.insert('T')
// BST.insert('I')
// BST.insert('O')
// BST.insert('N')

// console.log(BST)

// drill 4
// complexity exponential O(2^n)
// returns the sum of the entire tree

// drill 5

function height(tree, count = 0) {
  if(tree === null){
    return 0;
  }

  if(tree.left === null && tree.right === null){
    return count;
  }
  
  return Math.max(height(tree.right, count+1), height(tree.left, count + 1));
}

console.log(height(BST));
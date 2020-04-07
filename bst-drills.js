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

let wrongBST = new BinarySearchTree()
wrongBST.insertWrong(3)
wrongBST.insertWrong(1)
wrongBST.insertWrong(4)
wrongBST.insertWrong(6)
wrongBST.insertWrong(9)
wrongBST.insertWrong(2)
wrongBST.insertWrong(5)
wrongBST.insertWrong(7)

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

// function height(tree, count = 0) {
//   if(tree === null){
//     return 0;
//   }

//   if(tree.left === null && tree.right === null){
//     return count;
//   }
  
//   return Math.max(height(tree.right, count+1), height(tree.left, count + 1));
// }

// console.log(height(BST));


// drill 6
// a BTS can only have two children nodes & right branch has a larger key
// than root node, left branch has a smaller key than root node

// function checkBST(tree) {
//     let answer = true

//     if(tree.right !== null && tree.right.key < tree.key) {
//         answer = false
//     } else if(tree.right !== null && tree.right.key > tree.key) {
//         checkBST(tree.right)
//     } else if(tree.left !== null && tree.left.key > tree.key) {
//         answer = false
//     } else if(tree.left !== null && tree.left.key < tree.key) {
//         checkBST(tree.left)
//     }

//     return answer
// }

// console.log(checkBST(wrongBST))
// console.log(checkBST(BST))

//drill 7

function third(tree, arr = []){

  if(tree){
    arr.push(tree.key);
    third(tree.left, arr);
    third(tree.right, arr);
  }

  if(arr.length < 3) {
    return 'length is less than 3';
  }

  const sorted = arr.sort((a,b) => a - b);

  return sorted[sorted.length - 3];
}

//console.log(third(BST));
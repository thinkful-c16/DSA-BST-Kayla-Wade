'use strict';

const BinarySearchTree = require('./bst');
const mixBinary = require('./scratch');

let BST = new BinarySearchTree();
let trashBinary = new mixBinary();

//== Height of BST ==//

const findHeight = tree => {
  let height = 0;
  let count = 0;
  //max node is number of nodes * 2; 
  function findDistanceToRoot(node) {
    let count = 1;
    while (node.parent) {
      count++;
      node = node.parent;
    }
    if (count > height) {
      height = count;
    }
    return;
  }

  function traverse(tree) {
    if(tree.key === null) {
      return 'This tree is empty';
    }
    if (tree.left && tree.right) {
      traverse(tree.left);
      traverse(tree.right);
    }
    else if (tree.left) {
      traverse(tree.left);
    }
    else if (tree.right) {
      traverse(tree.right);
    }
    else {
      findDistanceToRoot(tree);
    }
    return `The height of this tree is ${height}`;
  }
  
  return traverse(tree);

};

//== BST VALIDATION ==//

const isBST = tree => {
  if (tree.parent === null) {
    return evaluateChildren(tree);
  } 

  function evaluateChildren(tree) {
    if ((tree.left) && !(tree.left.key < tree.key)) {
      return 'Not a valid Binary Search Tree';
    }
    if ((tree.right) && !(tree.right.key > tree.key)) {
      return 'Not a valid Binary Search Tree';
    }
    else if (tree.right && tree.left) {
      evaluateChildren(tree.right);
      evaluateChildren(tree.left);
    }
    else if (tree.right) {
      evaluateChildren(tree.right);
    }
    else if (tree.left) {
      evaluateChildren(tree.left);
    }
    else {
      return 'With only one item in tree, this is a valid binary search tree';
    }
    return 'This is a valid Binary Search Tree';
  } 


};


function main() {
  BST.insert(7);
  BST.insert(5);
  BST.insert(10);
  BST.insert(6);
  BST.insert(4);
  BST.insert(13);
  BST.insert(9);
  BST.insert(14);
  BST.insert(15);
  BST.insert(20);
  BST.insert(18);
  BST.insert(19);
  BST.insert(2);
  BST.insert(1);
  BST.insert(0);
  BST.insert(3);
  trashBinary.insert(10);

  // console.dir(BST, {depth: null, colors:true});
  console.log(trashBinary);
}

main();
// console.log(findHeight(BST));

console.log(isBST(BST));
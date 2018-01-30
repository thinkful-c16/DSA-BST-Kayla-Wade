'use strict';

const BinarySearchTree = require('./bst');

let bst = new BinarySearchTree();

//== Height of BST ==//

const findHeight = tree => {
  let height = 0;
  //max node is number of nodes * 2; 
  function findDistanceToRoot(node) {
    let count = 0;
    if (node.parent) {
      count++;
      findDistanceToRoot(node.parent);
    }
    else {
      if (count > height) {
        height = count;
      }
    }
  }
  function traverse(tree) {
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
    return height;
  }
  
  traverse(tree);



};

console.log(findHeight(bst));
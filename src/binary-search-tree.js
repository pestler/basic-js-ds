const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
   constructor() {
    this.root = null;
  }
  root() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};

/*
 insert(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode); // helper method below
    }
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  //has
  inOrderTraverse(node, callback){
    if (node !=null){
      this.inOrderTraverse(node.left, callback);
      callback(node.data);
      this.inOrderTraverse(node.right, callback);
    }
  }
  
search(node,data){
  if (node === null){
    return null;
  } else if (data > node.data){
    return this.search(node.right,data);
  } else {
    console.log(node)
    return node;
  }

}

}

const BST = new BinarySearchTree();

BST.insert(11); // establishes root node
BST.insert(7);
BST.insert(9);
BST.insert(15);
BST.insert(6);

BST.search(BST.root, 9);


console.log(BST);
*/

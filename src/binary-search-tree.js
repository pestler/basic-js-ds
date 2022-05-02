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
    return this.tree;
  }

  add(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    }

    if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    if (this.data === data) {
      return this;
    }

    if (data < this.data && this.left) {
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    } else {
      return null;
    }
  }
  

  remove(data) {
    this.root = this.removeNode(this.root, data); // helper method below
}
removeNode(node, data) {
    if (node === null) {
        return null;    
    } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;    
    } else if (data > node.data) {
        node.right = this.removeNode(node.right, data);
        return node;    
    } else {        
        if (node.left === null && node.right === null) {
            node = null;
            return node;
        }        
        if (node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }        
        let newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    }
}

min(root = this.tree) {
  if (root === null) return null;
  let min = root.data,
      node = root;

  while (node.left !== null) {
      min = node.left.data;
      node = node.left;
  }

  return min;
}

  max() {    
      if (this.tree === null) return null;
      let max = this.tree.data,
          node = this.tree;
      while (node.right !== null) {
          max = node.right.data;
          node = node.right;
      }
      return max; 
}

  }


module.exports = {
  BinarySearchTree
};


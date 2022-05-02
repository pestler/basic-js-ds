const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    this.root = search(this.root, data);
    function search(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) { 
        return node;
      }
       data < node.data 
        ? node.left = search(node.left, data)      
        : node.right = search(node.right, data)
      
      return node;
    }
  }

  has(data) {
    return search(this.root, data);
    function search(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) { 
        return true;
      }
      return data < node.data
        ? search(node.left, data) 
        : search(node.right, data)
    }
  }

  find(data) {
    return search(this.root, data);
    function search(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) { 
        return node;
      }
      return data < node.data
        ? search(node.left, data) 
        : search(node.right, data)
    }
  }

  remove(data) {
    this.root = removeNode(this.root, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        if (!node.left && !node.right) { 
          return null;
        }
        if (!node.left) { 
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        const min = searchMin(node.right); 
        node.data = min.data;
        node.right = removeNode(node.right, min.data); 
        return node;
      }
      if (data < node.data) { 
        node.left = removeNode(node.left, data);
      } else {
        node.right = removeNode(node.right, data);
      }
      return node;
    }
    function searchMin(node) {
      if (!node.left) {
        return node;
      }
      return searchMin(node.left);
    }
  }

  min() {
    return search(this.root);
    function search(node, data) {
      if (!node.left) {
        return node.data;
      }
      return search(node.left, data);
    }
  }

  max() {
    return searchMax(this.root);
    function searchMax(node, data) {
      if (!node.right) {
        return node.data;
      }
      return searchMax(node.right, data);
    }
  }
}

module.exports = {
  BinarySearchTree
};

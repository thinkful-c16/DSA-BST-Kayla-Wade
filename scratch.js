'use strict';

class mixBinary {
  constructor(key=null, value=null, parent=null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    }
    else if (key > this.key) {
      if (this.left === null) {
        this.left = new mixBinary(key, value, this);
      }
      else {
        this.left.insert(key, value);
      }
    }
    else if (key < this.key) {
      if (this.right === null) {
        this.right = new mixBinary(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }


}

module.exports = mixBinary;
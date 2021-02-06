class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(
      function(a,b) {
        return a-b;
      }
    );
    this.length ++;
    return this.items;
  }

  get(pos) {
    if (pos > this.items.length-1) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.length-1];
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];  
  }

  sum() {
    let sum2 = this.items.reduce(
      function(acc, elem) {
        return acc + elem;
      },
      0
    );
    return sum2;
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    let sum2 = this.items.reduce(
      function(acc, elem) {
        return acc + elem;
      },
      0
    );
    return sum2/this.length;    
  }
}

module.exports = SortedList;

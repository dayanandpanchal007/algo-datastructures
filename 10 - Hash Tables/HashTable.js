
class HashTable {
  constructor(size = 13) {
    this.keyMap = new Array(size);
    this.length = 0;
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0);
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // should handle duplicate keys
  set(key, value) {
    const hashKey = this._hash(key);
    if (!this.keyMap[hashKey]) {
      this.keyMap[hashKey] = [];
    } 
    this.keyMap[hashKey].push([key, value]);
    this.length++;
    return this.keyMap;
  }

  get(key) {
    const hashKey = this._hash(key);
    if (!this.keyMap[hashKey]) return undefined;
    if (this.keyMap[hashKey].length === 1) return this.keyMap[hashKey][0][1];
    if (this.keyMap[hashKey].length > 1) {
      const arrVal = this.keyMap[hashKey];
      for (let val of arrVal) {
        if (val[0] === key) return val[1];
      }
    }
  }

  values() {
    let valueArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          valueArr.push(this.keyMap[i][j][1]);
        }
      }
    }

    return valueArr.filter((val, idx, arr) => arr.indexOf(val) === idx);
  }

  keys() {
    let keyArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keyArr.push(this.keyMap[i][j][0]);
        }
      }
    }

    return keyArr.filter((val, idx, arr) => arr.indexOf(val) === idx);
  }

  get size() {
    return this.length;
  }
}

ht = new HashTable();
ht.set('red', '#ff0000');
ht.set('blue', '#00ff00');
ht.set('green', '#0000ff');

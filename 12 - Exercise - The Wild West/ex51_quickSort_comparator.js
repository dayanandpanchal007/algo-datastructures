
function partition(arr, cb = null, start = 0) {
  // good luck!
  const pivot = start;
  let pivotIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (
      (typeof cb === 'function' && cb(arr[i], arr[pivot]) < 0) ||
      (typeof cb !== 'function' && arr[i] < arr[pivot])
      ) {
      pivotIdx++;
      [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
    }
  }

  [arr[pivot], arr[pivotIdx]] = [arr[pivotIdx], arr[pivot]];

  return pivotIdx;
}

function quickSort(arr, cb = null, start = 0, end = arr.length) {
  // good luck!
  if (start < end) {
      const pivotIdx = partition(arr, cb, start);
      quickSort(arr, cb, start, pivotIdx - 1);
      quickSort(arr, cb, pivotIdx + 1, end)
  }
  return arr; 
}

console.log(`quickSort([4,20,12,10,7,9]): ${quickSort([4,20,12,10,7,9])}`);
console.log(`quickSort([0,-10,7,4]): ${quickSort([0,-10,7,4])}`);
console.log(`quickSort([1,2,3]): ${quickSort([1,2,3])}`);
console.log(`quickSort([]): ${quickSort([])}`);
console.log(`quickSort([4,3,5,343,232,4,34,232,32,435,34,23,2,453,546,75,67,4342]): ${quickSort([4,3,5,343,232,4,34,232,32,435,34,23,2,453,546,75,67,4342])}`);

let kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];
let sortedKitties = quickSort(kitties, (a,b) => {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}, 0, 5);
console.log(`kitties: ${JSON.stringify(sortedKitties)}`);


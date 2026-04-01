

/**
 * 
 * @param {array} arr input array
 * @param {function} cb comparator function
 * @returns array
 */
function selectionSort(arr, cb){
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i+1; j < arr.length; j++) {
      if (
        (typeof cb === 'function' && cb(arr[minIdx], arr[j]) > 0) ||
        (typeof cb !== 'function' && arr[j] < arr[minIdx])
        ) {
        minIdx = j;
      } 
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

console.log(`selectionSort([4,20,12,10,7,9]): ${selectionSort([4,20,12,10,7,9])}`);
console.log(`selectionSort([0,-10,7,4]): ${selectionSort([0,-10,7,4])}`);
console.log(`selectionSort([1,2,3]): ${selectionSort([1,2,3])}`);
console.log(`selectionSort([]): ${selectionSort([])}`);
console.log(`selectionSort([4,3,5,343,232,4,34,232,32,435,34,23,2,453,546,75,67,4342]): ${selectionSort([4,3,5,343,232,4,34,232,32,435,34,23,2,453,546,75,67,4342])}`);

let kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];
let sortedKitties = selectionSort(kitties, (a,b) => {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
});
console.log(`kitties: ${JSON.stringify(sortedKitties)}`);

let moreKittyData = [
  {
    name: 'LilBub',
    age: 7
  },
  {
    name: 'Garfield',
    age: 40
  },
  {
    name: 'Heathcliff',
    age: 45
  },
  {
    name: 'Blue',
    age: 1
  },
  {
    name: 'Grumpy',
    age: 6
  }
];

let sortedKittiesByAge = selectionSort(moreKittyData, (a,b) => b.age - a.age);
console.log(`more kitties: ${JSON.stringify(sortedKittiesByAge)}`);

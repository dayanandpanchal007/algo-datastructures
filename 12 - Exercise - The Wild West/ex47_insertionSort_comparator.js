
/**
 * 
 * @param {array} arr input array
 * @param {function} cb comparator function
 * @returns array
 */
function insertionSort(arr, cb){
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (
        (typeof cb === 'function' && cb(arr[j], arr[j-1]) < 0) ||
        (typeof cb !== 'function' && arr[j] < arr[j-1])
        ) {
          [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
        }
    }
  }
  return arr;
}


console.log(`insertionSort([4,20,12,10,7,9]): ${insertionSort([4,20,12,10,7,9])}`);
console.log(`insertionSort([0,-10,7,4]): ${insertionSort([0,-10,7,4])}`);
console.log(`insertionSort([1,2,3]): ${insertionSort([1,2,3])}`);
console.log(`insertionSort([]): ${insertionSort([])}`);
console.log(`insertionSort([4,3,5,343,232,4,34,232,32,435,34,23,2,453,546,75,67,4342]): ${insertionSort([4,3,5,343,232,4,34,232,32,435,34,23,2,453,546,75,67,4342])}`);

let kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];
let sortedKitties = insertionSort(kitties, (a,b) => {
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

let sortedKittiesByAge = insertionSort(moreKittyData, (a,b) => b.age - a.age);
console.log(`more kitties: ${JSON.stringify(sortedKittiesByAge)}`);

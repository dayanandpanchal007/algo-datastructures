
/**
 * 
 * @param {array} arr input array
 * @param {function} cb comparator function
 * @returns array
 */
function bubbleSort(arr, cb){
  for (let i = 0; i < arr.length; i++) {
  let swapped = false;
  for (let j = 1; j < arr.length - i; j++) {
    if (
      (typeof cb === 'function' && cb(arr[j-1], arr[j]) > 0) ||
      (typeof cb !== 'function' && arr[j-1] > arr[j])
    ) {
      [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
      swapped = true;
    }
  }
  if (!swapped) break;
  }
  return arr;
}

console.log(`bubbleSort([4,20,12,10,7,9]): ${bubbleSort([4,20,12,10,7,9])}`);
console.log(`bubbleSort([0,-10,7,4]): ${bubbleSort([0,-10,7,4])}`);
console.log(`bubbleSort([1,2,3]): ${bubbleSort([1,2,3])}`);
console.log(`bubbleSort([]): ${bubbleSort([])}`);
console.log(`bubbleSort([4,3,5,343,232,4,34,232,32,435,34,23,2,453,546,75,67,4342]): ${bubbleSort([4,3,5,343,232,4,34,232,32,435,34,23,2,453,546,75,67,4342])}`);

let kitties = ['LilBub', 'Garfield', 'Heathcliff', 'Blue', 'Grumpy'];
let sortedKitties = bubbleSort(kitties, (a,b) => {
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

let sortedKittiesByAge = bubbleSort(moreKittyData, (a,b) => b.age - a.age);
console.log(`more kitties: ${JSON.stringify(sortedKittiesByAge)}`);


/*
  *** Divide and Conquer - countZeroes
  Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called 
*/

function firstZeroIndex(arr, left, right) {
  if (right < left) return -1;
  let mid = Math.floor((left + right) / 2);
  if ((mid === 0 || arr[mid-1] === 1) && arr[mid] === 0) return mid;
  if (arr[mid] === 1) return firstZeroIndex(arr, mid + 1, right);
  else return firstZeroIndex(arr, left, mid - 1);
}

function countZeroes(arr) {
  const len = arr.length;
  const first = firstZeroIndex(arr, 0, len - 1);
  if (first === -1) 
    return 0; 
  return (len - first); 
}

console.log(`countZeroes([1,1,1,1,0,0]): ${countZeroes([1,1,1,1,0,0])}`);
console.log(`countZeroes([1,0,0,0,0]): ${countZeroes([1,0,0,0,0])}`);
console.log(`countZeroes([0,0,0]): ${countZeroes([0,0,0])}`);
console.log(`countZeroes([1,1,1,1]): ${countZeroes([1,1,1,1])}`);


/*
  Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.
*/


/**
 * 
 * @param {array} arr input array of numbers
 * @param {number} n input number
 */
function findPair(arr, n) {
  let absVal = Math.abs(n);
  if (arr.length === 0 || arr.length === 1) return false;
  if (arr.length === 2) return Math.abs(arr[0] - arr[1]) === Math.abs(n);
  
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (Math.abs(arr[left] - arr[right]) > absVal) left++;
    else if (Math.abs(arr[left] - arr[right]) < absVal) right--;
    else return true;
  }
  return false;
}

console.log(`findPair([6,1,4,10,2,4], 2): true === ${findPair([6,1,4,10,2,4], 2)}`);
console.log(`findPair([8,6,2,4,1,0,2,5,13,], 1): true === ${findPair([8,6,2,4,1,0,2,5,13,], 1)}`);
console.log(`findPair([4,-2,3,10], -6): true === ${findPair([4,-2,3,10], -6)}`);
console.log(`findPair([6,1,4,10,2,4], 22): false === ${findPair([6,1,4,10,2,4], 22)}`);
console.log(`findPair([], 0): false === ${findPair([], 0)}`);
console.log(`findPair([5,5], 0): true === ${findPair([5,5], 0)}`);
console.log(`findPair([-4,4], -8): true === ${findPair([-4,4], -8)}`);
console.log(`findPair([-4,4], 8): true === ${findPair([-4,4], 8)}`);
console.log(`findPair([1,3,4,6], -2): true === ${findPair([1,3,4,6], -2)}`);
console.log(`findPair([0,1,3,4,6], -2): true === ${findPair([0,1,3,4,6], -2)}`);

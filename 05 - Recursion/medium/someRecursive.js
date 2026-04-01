/*
  Write a recursive function called <strong>someRecursive</strong> which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
*/


function isOdd(val) {
  return val % 2 !== 0;
}

/**
 * 
 * @param {array} arr Accepts array
 * @param {function} callback Accepts function reference
 */
function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}

console.log(`someRecursive([1, 2, 3, 4], isOdd): ${someRecursive([1, 2, 3, 4], isOdd)}`);
console.log(`someRecursive([4, 6, 8, 9], isOdd): ${someRecursive([4, 6, 8, 9], isOdd)}`);
console.log(`someRecursive([4, 6, 8], isOdd): ${someRecursive([4, 6, 8], isOdd)}`);
console.log(`someRecursive([4, 6, 8], isOdd): ${someRecursive([4, 6, 8], val => val > 10)}`);

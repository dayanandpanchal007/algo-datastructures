/*
  Write a function called&nbsp;<code>productOfArray</code>&nbsp;which takes in an array of numbers and returns the product of them all.
*/

/**
 * @summary Calculates the product of elements in the array
 * @param {array} arr Accepts array of numbers
 */
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(`productOfArray([1, 2, 3]): ${productOfArray([1, 2, 3])}`);
console.log(`productOfArray([1, 2, 3, 10]): ${productOfArray([1, 2, 3, 10])}`);
console.log(`productOfArray([]): ${productOfArray([])}`);

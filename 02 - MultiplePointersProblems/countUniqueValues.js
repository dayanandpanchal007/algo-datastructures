/*
  Write a function called countUniqueValues, which accepts sorted array, and counts the unique values in the array. There can be negetive numbers also.
*/

/**
 * @summary Time complexity of a function is O(n)
 * @param {array} arr Accepts sorted array of integers
 */
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(`[1, 1, 1, 1, 1, 2]: ${countUniqueValues([1, 1, 1, 1, 1, 2])}`);
console.log(`[1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]: ${countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])}`);
console.log(`[]: ${countUniqueValues([])}`);
console.log(`[-2, -1, -1, 0, 1]: ${countUniqueValues([-2, -1, -1, 0, 1])}`);

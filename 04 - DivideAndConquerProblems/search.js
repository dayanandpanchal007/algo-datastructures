/*
  Write a function called search, that accepts sorted array of integers and element to be searched. Function returns index of an element if present and -1 if element doesn't exist
*/

/**
 * @summary Time complexity of function is log(N) base 2
 * @param {array} arr Accepts sorted integer
 * @param {number} n Accepts number to be searched
 */
function search(arr, n) {

  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    const middle = Math.floor((min + max) / 2);

    if (arr[middle] < n) {
      min = middle + 1;
    } else if (arr[middle] > n) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(`([1, 2, 3, 4, 5, 6], 4): ${search([1, 2, 3, 4, 5, 6], 4)}`);
console.log(`([1, 2, 3, 4, 5, 6], 6): ${search([1, 2, 3, 4, 5, 6], 6)}`);
console.log(`([1, 2, 3, 4, 5, 6], 11): ${search([1, 2, 3, 4, 5, 6], 11)}`);
console.log(`([], 11): ${search([], 11)}`);

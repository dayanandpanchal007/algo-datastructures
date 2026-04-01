/*
  Implement bubble sort
*/


/**
 * @summary Sorts the given array using bubble sort alogrithm. Time complexity is O(n^2).
 * @param {array} arr Accepts array
 */
function bubbleSort(arr) {
  let swapped;
  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j-1] > arr[j]) {
        [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

console.log(`bubbleSort([5, 1, 0, 4, 7, 2]): ${bubbleSort([5, 1, 0, 4, 7, 2])}`);
console.log(`bubbleSort([5, 0, 1, 2, 3, 4]): ${bubbleSort([5, 0, 1, 2, 3, 4])}`);

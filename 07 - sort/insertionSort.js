/*
  Implement insertion sort
*/


/**
 * @summary Sorts the given array using insertion sort. Time complexity is O(n^2).
 * @param {array} arr Accepts array
 */
function insertionSort(arr) {
  let innerloops = 0;
  let outerloops = 0;
  for (let i = 0; i < arr.length; i++) {
    outerloops++;
    for (let j = i; j > 0 && arr[j-1] > arr[j]; j--) {
      innerloops++;
      [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
    }
  }
  console.log('outerloops# ', outerloops);
  console.log('innerloops# ', innerloops);
  return arr;
}

console.log(`insertionSort([5, 1, 0, 4, 7, 2]): ${insertionSort([5, 1, 0, 4, 7, 2])}`);
console.log(`insertionSort([5, 0, 1, 2, 3, 4]): ${insertionSort([5, 0, 1, 2, 3, 4])}`);
console.log(`insertionSort([0, 1, 2, 3, 4, 5]): ${insertionSort([0, 1, 2, 3, 4, 5])}`);
console.log(`insertionSort([5, 4, 3, 2, 1, 0]): ${insertionSort([5, 4, 3, 2, 1, 0])}`);
console.log(`insertionSort([]): ${insertionSort([])}`);

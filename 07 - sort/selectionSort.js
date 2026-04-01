/*
  Implement selection sort
*/


/**
 * @summary Sorts the given array using selection sort. Time complexity is O(n^2).
 * @param {array} arr Accepts array
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let small = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[small] > arr[j]) {
        small = j;
      }
    }
    [arr[small], arr[i]] = [arr[i], arr[small]];
  }
  return arr;
}

console.log(`selectionSort([5, 1, 0, 4, 7, 2]): ${selectionSort([5, 1, 0, 4, 7, 2])}`);
console.log(`selectionSort([5, 0, 1, 2, 3, 4]): ${selectionSort([5, 0, 1, 2, 3, 4])}`);
console.log(`selectionSort([]): ${selectionSort([])}`);

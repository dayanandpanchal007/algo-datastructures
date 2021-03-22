/*
  Implement quick sort
*/


/**
 * Sorts the array using quick sort
 * 
 * Time complexity(Best) O(nlogn)
 * 
 * Time complexity(Avg) O(nlogn)
 * 
 * Time complexity(Worst) O(n^2)
 * 
 * Space complexity O(logn)
 * @param {array} arr Accepts array
 * @param {number} start Accepts number
 * @param {number} end Accepts number
 */
function pivot(arr, start = 0, end = arr.length + 1) {

  let currentPivot = arr[start];
  let pivotIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (currentPivot > arr[i]) {
      pivotIndex++;
      [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
    }
  }

  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];

  return pivotIndex;
}


/**
 * @summary Sorts the array using quick sort.
 * @param {array} arr Accepts array
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);

    // left
    quickSort(arr, left, pivotIndex - 1);

    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}


console.log(`quickSort([4, 6, 9, 1, 2, 5, 3]): ${quickSort([4, 6, 9, 1, 2, 5, 3])}`);

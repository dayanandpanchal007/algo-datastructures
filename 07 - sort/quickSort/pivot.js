/*
  Pivot (Partition) for Quick Sort
*/


/**
 * @summary Pivot (Partition) for quick sort
 * @param {array} arr Accepts array
 */
function pivot(arr, start = 0, end = arr.length + 1) {

  let pivot = start;
  let pivotIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[pivot] > arr[i]) {
      pivotIndex++;
      [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
    }
  }

  [arr[pivot], arr[pivotIndex]] = [arr[pivotIndex], arr[pivot]];

  return arr;
}



console.log(`pivot([4, 8, 2, 1, 5, 7, 6, 3]): ${pivot([4, 8, 2, 1, 5, 7, 6, 3])}`);

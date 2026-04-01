/*
  Implement merge sort
*/

/**
 * 
 * @param {array} leftArr Accepts sorted array
 * @param {array} rightArr Accepts sorted array
 */
function mergeSortedArrays(leftArr, rightArr) {
  let sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      sortedArray.push(leftArr[i]);
      i++;
    } else {
      sortedArray.push(rightArr[j]);
      j++;
    }
  }

  while (i < leftArr.length) {
    sortedArray.push(leftArr[i]);
    i++;
  }

  while (j < rightArr.length) {
    sortedArray.push(rightArr[j]);
    j++;
  }

  return sortedArray;
}

/**
 * Sorts the array using merge sort
 * 
 * Time complexity(Best) O(nlogn)
 * 
 * Time complexity(Avg) O(nlogn)
 * 
 * Time complexity(Worst) O(nlogn)
 * 
 * Space complexity O(n)
 * @param {array} arr Accepts array
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const leffSortedArr = mergeSort(arr.slice(0, middle));
  const righSortedtArr = mergeSort(arr.slice(middle));
  return mergeSortedArrays(leffSortedArr, righSortedtArr);
}

console.log(`mergeSort([5, 2, 7, 4, 5, 1, 0, 8]): ${mergeSort([5, 2, 7, 4, 5, 1, 0, 8])}`);

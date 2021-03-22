/*
  Merge sorted arrays
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


console.log(`mergeSortedArrays([2, 4, 7, 5], [1, 6, 9, 10, 12]): ${mergeSortedArrays([2, 4, 7, 5], [1, 6, 9, 10, 12])}`);
console.log(`mergeSortedArrays([1, 6, 9, 10, 12], [2, 4, 7, 5]): ${mergeSortedArrays([1, 6, 9, 10, 12], [2, 4, 7, 5])}`);
console.log(`mergeSortedArrays([1, 6, 9, 10, 12], []): ${mergeSortedArrays([1, 6, 9, 10, 12], [])}`);
console.log(`mergeSortedArrays([], [1, 6, 9, 10, 12]): ${mergeSortedArrays([], [1, 6, 9, 10, 12])}`);

/*
  Write a function called <strong>binarySearch</strong> which accepts a <strong>sorted</strong> array and a value and returns the index at which the value exists. Otherwise, return -1.

  This algorithm should be more efficient than linearSearch - you can read how to implement it here -
  https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
  and here -
  https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
*/


/**
 * @summary Binary search implementation
 * @param {array} arr Accepts array of numbers
 * @param {number} val Accepts number
 */
function binarySearch(arr, val) {
  if (arr.length === 0) return -1;

  function getIndex(left, right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] === val) return middle;
    if (left === right) return arr[middle] === val ? middle : -1;
    if (arr[middle] > val) return getIndex(left, middle - 1);
    if (arr[middle] < val) return getIndex(middle + 1, right);
  }

  return getIndex(0, arr.length - 1);
}

console.log(`binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 2): ${binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 2)}`);
console.log(`binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 8): ${binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 8)}`);
console.log(`binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4): ${binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4)}`);
console.log(`binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0): ${binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0)}`);
console.log(`binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9): ${binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9)}`);
console.log(`binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 19): ${binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 19)}`);
console.log(`binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], -19): ${binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], -19)}`);
console.log(`binarySearch([], -19): ${binarySearch([], -19)}`);


/*
  Implement radix sort
*/

/*
  Math solution
  function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }

  function digitCount(num) {
    if (num === 0) return 0;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

*/


/**
 * 
 * @param {number} num Accepts number
 * @param {number} place Accepts number
 */
function getDigit(num, place) {
  const numStr = Math.abs(num).toString();
  const len = numStr.length;
  return numStr[len - place] ? parseInt(numStr[len - place], 10) : 0;
}

/**
 * 
 * @param {number} num Accepts number
 */
function digitCount(num) {
  const numStr = Math.abs(num).toString();
  return numStr.length;
}

/**
 * 
 * @param {array} arr Accepts array of numbers
 */
function mostDigit(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  return digitCount(max);
}


/**
 * Sorts the array using radix sort
 * 
 * Time complexity is O(nk) -> (best, average and worst)
 * 
 * Space complexity is O(n+k)
 * @param {array} arr Accepts array of numbers
 */
function radixSort(arr) {
  let maxDigit = mostDigit(arr);
  console.log('maxDigit', maxDigit);
  for (let k = 0; k < maxDigit; k++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k+1);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
}


console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
console.log(`radixSort([23, 345, 5467, 12, 2345, 9852]): ${radixSort([23, 345, 5467, 12, 2345, 9852])}`);
console.log(`radixSort([3, 5, 7, 2, 5, 2]): ${radixSort([3, 5, 7, 2, 5, 2])}`);
console.log(`radixSort([3345, 523, 70374, 23946, 509, 2]): ${radixSort([3345, 523, 70374, 23946, 509, 2])}`);

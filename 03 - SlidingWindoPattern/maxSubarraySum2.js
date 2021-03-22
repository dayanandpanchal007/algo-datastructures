'use strict'

/*
  Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

  Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
*/


/**
 * 
 * @param {array} arr Accepts array of integers
 * @param {number} n Accepts number
 */
function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;
  let maxSum = 0;
  let temSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  temSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    temSum = temSum - arr[i - n] + arr[i];
    maxSum = maxSum > temSum ? maxSum : temSum;
  }

  return maxSum;
}

console.log(`([], 2): ${maxSubarraySum([], 2)}`);
console.log(`([100, 200, 300, 400], 2): ${maxSubarraySum([100, 200, 300, 400], 2)}`);
console.log(`([1, 4, 2, 10, 23, 3, 1, 0, 20], 4): ${maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)}`);
console.log(`([-3, 4, 0, -2, 6, -1], 2): ${maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)}`);
console.log(`([2, 3], 3): ${maxSubarraySum([2, 3], 3)}`);

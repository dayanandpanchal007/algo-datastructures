/*
  Write a function called maxSubarraySum, that accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
*/

/**
 * @summary Time complexity is O(n)
 * @param {array} arr Accepts array of integers
 * @param {number} n Accepts a natural number
 */
function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = maxSum > tempSum ? maxSum : tempSum;
  }

  return maxSum;
}

console.log(`([1, 2, 5, 2, 8, 1, 5], 2): ${maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)}`);
console.log(`([1, 2, 5, 2, 8, 1, 5], 4): ${maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)}`);
console.log(`([4, 2, 1, 6], 1): ${maxSubarraySum([4, 2, 1, 6], 1)}`);
console.log(`([4, 2, 1, 6, 4], 4): ${maxSubarraySum([4, 2, 1, 6, 4], 4)}`);
console.log(`([], 4): ${maxSubarraySum([], 4)}`);

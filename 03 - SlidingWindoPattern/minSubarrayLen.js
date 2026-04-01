'use strict'

/*
  Write a function called <b>minSubArrayLen</b> which accepts two parameters - an array of positive integers and a positive integer.

  This function should return the minimal length of a <b>contiguous</b> subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
*/

/**
 * @summary Time complexity is O(n)
 * @param {array} arr Accepts array of positive integers
 * @param {number} n Accepts positive integer
 */
function minSubArrayLen(arr, n) {
  if (arr.length === 0) return 0;

  const lengthsArray = [];
  let i = 0;
  let j = 1;
  for (;j < arr.length && i <= j;) {
    if (arr[i] >= n || arr[j] > n) return 1;

    if ((arr[i] + arr[j]) < n) j++;
    else if ((arr[i] + arr[j]) >= n) {
      lengthsArray.push(j - i + 1);
      i++;
    } 
  }

  return Math.min(...lengthsArray);
}

console.log(`([2, 3, 1, 2, 4, 3], 7): ${minSubArrayLen([2, 3, 1, 2, 4, 3], 7)}`)

/*
  Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
*/

/**
 * @summary Time complexity of below function is O(n)
 * @param {array} arr1 Takes first input as array of numbers
 * @param {array} arr2 Takes second input as array of numbers
 */
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
  }

  for (key in frequencyCounter1) {
    if (!(key**2 in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key**2]) return false;
  }
  return true;
}

const output1 = same([1,2,3], [1,4,9]);
console.log('[1,2,3], [1,4,9]: ', output1);
const output2 = same([1,2,3], [1,9]);
console.log('[1,2,3], [1,9]: ', output2);
const output3 = same([1,2,1], [4,4,1]);
console.log('[1,2,1], [4,4,1]: ', output3);
const output4 = same([1,2,1], [4,1,1]);
console.log('[1,2,1], [4,1,1]: ', output4);

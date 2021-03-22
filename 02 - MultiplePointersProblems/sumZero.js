/*
  Write a function called sumZero, which accepts sorted array of integers. The function should find the first pair where sum is 0. Return an array that includes both values that sum to zero or undefined if pair doesn't exist.
*/

/**
 * @summary Time complexity of of function is O(n)
 * @param {array} arr Accepts sorted array
 */
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum > 0) right--;
    else if (sum < 0) left++;
    else return [arr[left], arr[right]]
  }
}

const output1 = sumZero([-3, -2, -1, 0, 1, 2, 3, 4, 5]);
console.log(`[-3, -2, -1, 0, 1, 2, 3, 4, 5]: [${output1}]`);

const output2 = sumZero([-3, -2, -1, 0]);
console.log(`[-3, -2, -1, 0, 1, 2, 3, 4, 5]: [${output2}]`);

const output3 = sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]);
console.log(`[-4, -3, -2, -1, 0, 1, 2, 3, 10]: [${output3}]`);

const output4 = sumZero([-14, -13, -12, -1, 0, 1, 2, 3, 10]);
console.log(`[-14, -13, -12, -1, 0, 1, 2, 3, 10]: [${output4}]`);

/*
  Write a function called <strong>recursiveRange</strong> which accepts a number and adds up all the numbers from 0 to the number passed to the function&nbsp;
*/


/**
 * @summary Calculates the sum from 0 upto given number `n`
 * @param {number} n Accepts number
 */
function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n-1);
}

console.log(`recursiveRange(6): ${recursiveRange(6)}`);
console.log(`recursiveRange(10): ${recursiveRange(10)}`);

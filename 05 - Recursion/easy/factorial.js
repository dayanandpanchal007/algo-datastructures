/*
  Write a function&nbsp;<strong>factorial</strong> which accepts a number and returns the factorial of that number. A&nbsp;factorial is the product of an integer and all the integers below it; e.g., factorial four (&nbsp;<em>4!</em>&nbsp;) is equal to 24, because 4 *&nbsp;3&nbsp;* 2 * 1 equals 24.&nbsp;<strong> factorial zero (0!) is always 1.</strong>
*/


/**
 * @summary Calculates fatorial of a number
 * @param {number} n Accepts whole number
 */
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n-1);
}

console.log(`factorial(1): ${factorial(1)}`);
console.log(`factorial(2): ${factorial(2)}`);
console.log(`factorial(4): ${factorial(4)}`);
console.log(`factorial(7): ${factorial(7)}`);

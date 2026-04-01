/*
  Write a recursive function called <strong>fib</strong> which accepts a number and returns the <em>n</em>th number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
*/


/**
 * @summary Calculates nth fibonacci number and returns it.
 * @param {number} n Accetps a number
 */
function fib(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return fib(n-1) + fib(n-2);
}

console.log(`fib(4): ${fib(4)}`);
console.log(`fib(10): ${fib(10)}`);
console.log(`fib(28): ${fib(28)}`);
console.log(`fib(35): ${fib(35)}`);

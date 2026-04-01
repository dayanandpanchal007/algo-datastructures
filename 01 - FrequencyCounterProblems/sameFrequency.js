/*
  Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
*/

/**
 * 
 * @param {number} a First number
 * @param {number} b Second number
 */
function sameFrequency(a, b) {
  const stra = `${a}`;
  const strb = `${b}`;
  if (stra.length !== strb.length) return false;

  let lookup = {};

  for (let val of stra) {
    lookup[val] = ++lookup[val] || 1;
  }

  // console.log(lookup);
  for (let val of strb) {
    if (!lookup[val]) return false;
    else lookup[val]--;
  }

  return true;

}

console.log(`(182, 281): ${sameFrequency(182, 281)}`);
console.log(`(34, 14): ${sameFrequency(34, 14)}`);
console.log(`(3589578, 5879385): ${sameFrequency(3589578, 5879385)}`);
console.log(`(22, 222): ${sameFrequency(22, 222)}`);

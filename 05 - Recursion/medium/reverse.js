/*
  Write a recursive function called <strong>reverse</strong> which accepts a string and returns a new string in reverse.
*/


/**
 * @summary Reverses the given string
 * @param {string} str Accepts string
 */
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(`reverse('abcde'): ${reverse('abcde')}`);
console.log(`reverse('dayanand'): ${reverse('dayanand')}`);
console.log(`reverse(''): ${reverse('')}`);

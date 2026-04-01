/*
  Write a recursive function called <strong>isPalindrome</strong> which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
*/


/**
 * @summary Returns true if the given string is palindrome else false
 * @param {string} str Accepts string
 */
function isPalindrome(str) {
  if (str.length <= 1) return true;
  else if (str.length === 2) return str[0] === str[1];
  else if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  else return false;
}

console.log(`isPalindrome('awesome'): ${isPalindrome('awesome')}`)
console.log(`isPalindrome('foobar'): ${isPalindrome('foobar')}`)
console.log(`isPalindrome('tacocat'): ${isPalindrome('tacocat')}`)
console.log(`isPalindrome('amanaplanacanalpanama'): ${isPalindrome('amanaplanacanalpanama')}`)
console.log(`isPalindrome('amanaplanacanalpandemonium'): ${isPalindrome('amanaplanacanalpandemonium')}`)

/*
  Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
*/


/**
 * 
 * @param {string} str1 Accepts first string
 * @param {string} str2 Accepts second string
 */
function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;

  if (str1.length === str2.length && str1 === str2) return true;

  let i = 0;
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++;
    }
  }
  return i === str1.length;
}

console.log(`('hello', 'hello world'): ${isSubsequence('hello', 'hello world')}`);
console.log(`('sing', 'sting'): ${isSubsequence('sing', 'sting')}`);
console.log(`('abc', 'abracadabra'): ${isSubsequence('abc', 'abracadabra')}`);
console.log(`('abc', 'acb'): ${isSubsequence('abc', 'acb')}`);
console.log(`('javascript', 'javascript'): ${isSubsequence('javascript', 'javascript')}`);
console.log(`('javascript', 'java'): ${isSubsequence('javascript', 'java')}`);


/*
  Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

  Assume that there are only lowercase letters and no space or special characters in both the message and letters.
*/

/**
 * 
 * @param {string} message input message
 * @param {string} letters input letters
 * @returns boolean
 */
function constructNote(message, letters) {
  let lookup = {};
  for (let msg of message) lookup[msg] = ++lookup[msg] || 1;

  for (let letter of letters) {
    lookup[letter] && lookup[letter]--;
    if (lookup[letter] === 0) delete lookup[letter];
  }

  return Object.keys(lookup).length === 0;
}

console.log(`constructNote('aa', 'abc'): false === ${constructNote('aa', 'abc')}`);
console.log(`constructNote('abc', 'dcba'): true === ${constructNote('abc', 'dcba')}`);
console.log(`constructNote('aabbcc', 'bcabcaddff'): true === ${constructNote('aabbcc', 'bcabcaddff')}`);

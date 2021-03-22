/*
  Write a recursive function called <strong>capitalizeWords</strong>. Given an array of words, return a new array containing each word capitalized.
*/


/**
 * @summary Capitalizes all words in a given array of strings
 * @param {array} arr Array of strings
 */
function capitalizeWords(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;
  newArr.push(arr[0].toUpperCase());
  newArr = newArr.concat(capitalizeWords(arr.slice(1)));
  return newArr;
}

console.log(`capitalizeWords([]): ${capitalizeWords([])}`);
console.log(`capitalizeWords(['i', 'am', 'learning', 'recursion']): ${capitalizeWords(['i', 'am', 'learning', 'recursion'])}`);

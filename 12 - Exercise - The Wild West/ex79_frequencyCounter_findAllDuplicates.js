
/*
  Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.
*/


/**
 * 
 * @param {array} arr input array of numbers
 */
function findAllDuplicates(arr) {
  let duplicateArray = [];
  let lookup = {};
  for (let val of arr) lookup[val] = ++lookup[val] || 1;
  for (let key in lookup) lookup[key] > 1 && duplicateArray.push(parseInt(key, 10));
  return duplicateArray;
}

console.log(`findAllDuplicates([4,3,2,7,8,2,3,1]): ${findAllDuplicates([4,3,2,7,8,2,3,1])}`);
console.log(`findAllDuplicates([4,3,2,1,0]): ${findAllDuplicates([4,3,2,1,0])}`);
console.log(`findAllDuplicates([4,3,2,1,0,1,2,3]): ${findAllDuplicates([4,3,2,1,0,1,2,3])}`);

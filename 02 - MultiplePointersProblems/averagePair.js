/*
  Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
*/

/**
 * 
 * @param {array} arr Accepts sorted array of integers
 * @param {number} targetAvg Accepts floating value
 */
function averagePair(arr, targetAvg) {
  if (arr.length === 0) return false;
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const avg = ((left + right) / 2).toFixed(1);
    if (avg > targetAvg) right--;
    else if (avg < targetAvg) left++;
    else return true;
  }

  return false;
}

console.log(`([1, 2, 3], 2.5): ${averagePair([1, 2, 3], 2.5)}`);
console.log(`([1, 3, 3, 5, 6, 7, 10, 12, 19], 8): ${averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)}`);
console.log(`([-1, 0, 3, 4, 5, 6], 4.1): ${averagePair([-1, 0, 3, 4, 5, 6], 4.1)}`);
console.log(`([], 4): ${averagePair([], 4)}`);

/*
  Write a recursive function called <strong>flatten</strong> which accepts an array of arrays and returns a new array with all values flattened.
*/


/**
 * @summary Flattens the given array
 * @param {array} arr Accepts the array
 */
function flatten(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(`flatten([1, 2, 3, [4, 5], 6]): ${flatten([1, 2, 3, [4, 5], 6])}`);
console.log(`flatten([1, [2, [3, 4], [[5]]]]): ${flatten([1, [2, [3, 4], [[5]]]])}`);
console.log(`flatten([[1],[2],[3]]): ${flatten([[1],[2],[3]])}`);
console.log(`flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]): ${flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])}`);

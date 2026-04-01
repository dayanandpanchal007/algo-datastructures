/*
  Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/


function areThereDuplicates() {
  if (arguments.length < 2) return false;

  const arr = Object.values(arguments);
  const lookup = {};

  for (const val of arr) {
    lookup[val] = ++lookup[val] || 1;
  }

  for (const key in lookup) {
    if (lookup[key] > 1) return true;
  }

  return false;
}

console.log(`(1, 2, 3): ${areThereDuplicates(1, 2, 3)}`);
console.log(`(1, 2, 2): ${areThereDuplicates(1, 2, 2)}`);
console.log(`('a', 'b', 'c', 'a'): ${areThereDuplicates('a', 'b', 'c', 'a')}`);
console.log(`(1, 1): ${areThereDuplicates(1, 1)}`);
/*
  Write a recursive function called <strong>nestedEvenSum</strong>. Return the sum of all even numbers in an object which may contain nested objects.
*/


/**
 * @summary Returns the sum of all even numbers in an object which may contain nested objects
 * @param {object} obj Accepts object
 */
function nestedEvenSum(obj, sum = 0) {
  // const values = Object.values(obj);
  // for (let i = 0; i < values.length; i++) {
  //   const type = toString.call(values[i]);
  //   if (type === '[object Number]' && values[i] % 2 === 0) {
  //     sum += values[i];
  //   }
  //   if (type === '[object Object]') {
  //     sum += nestedEvenSum(values[i]);
  //   }
  // }
  for (key in obj) {
    const type = toString.call(obj[key]);
    if (type === '[object Number]' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
    if (type === '[object Object]') {
      sum += nestedEvenSum(obj[key]);
    }
  }
  return sum;
}

let obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

let obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(`nestedEvenSum(ob1): ${nestedEvenSum(obj1)}`);
console.log(`nestedEvenSum(ob2): ${nestedEvenSum(obj2)}`);


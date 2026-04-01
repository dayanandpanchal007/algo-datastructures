/*
  Write a function called&nbsp;<code>stringifyNumbers</code>&nbsp;which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
*/

/**
 * 
 * @param {object} obj Accepts object
 */
function stringifyNumbers(obj) {
  let newObj = {};

  for (key in obj) {
    const type = toString.call(obj[key]);
    if (type === '[object Number]') {
      newObj[key] = obj[key].toString();
    } else if (type === '[object Object]') {
      newObj[key] = Object.assign({}, newObj[key], stringifyNumbers(obj[key]));
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}


// function stringifyNumbers(obj) {
//   let newObj = {};
//   const keys = Object.keys(obj);

//   for (let i = 0; i < keys.length; i++) {
//     const type = toString.call(obj[keys[i]]);
//     if (type === '[object Number]') {
//       newObj[keys[i]] = obj[keys[i]].toString();
//     } else if (type === '[object Object]') {
//       newObj[keys[i]] = Object.assign({}, newObj[keys[i]], stringifyNumbers(obj[keys[i]]));
//     } else {
//       newObj[keys[i]] = obj[keys[i]];
//     }
//   }

//   return newObj;
// }


let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

let res = stringifyNumbers(obj);

console.log(`stringifyNumbers(obj):`);
console.log(res);
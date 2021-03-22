/*
  Write a function called&nbsp;<code>collectStrings</code>&nbsp;which accepts an object and returns an array of all the values in the object that have a typeof string
*/

/**
 * 
 * @param {object} obj Accepts object
 */
function collectStrings(obj) {
  let stringArray = [];

  for (key in obj) {
    const type = toString.call(obj[key]);
    if (type === '[object String]') {
      stringArray.push(obj[key]);
    } else if (type === '[object Object]') {
      stringArray = stringArray.concat(collectStrings(obj[key]));
    }
  }

  return stringArray;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

console.log(`collectStrings(obj): ${collectStrings(obj)}`);

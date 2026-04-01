/*
  Write a function called&nbsp;<code>collectStrings</code>&nbsp;which accepts an object and returns an array of all the values in the object that have a typeof string
*/

/**
 * 
 * @param {object} obj Accepts object
 */
function collectStrings(obj) {
  let stringArray = [];

  function gatherString(o) {
    for (key in o) {
      const type = toString.call(o[key]);
      if (type === '[object String]') {
        stringArray.push(o[key]);
      } else if (type === '[object Object]') {
        stringArray = stringArray.concat(gatherString(o[key]));
      }
    }
  }

  gatherString(obj);

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


function merge(arr1, arr2, cb){
  const newArray = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (
      (typeof cb === 'function' && cb(arr1[i], arr2[j]) < 0) ||
      (typeof cb !== 'function' && arr1[i] < arr2[j])
      ) {
        newArray.push(arr1[i]);
        i++;
    } else {
        newArray.push(arr2[j]);
        j++;
    }
  }
  while (i < arr1.length) {
    newArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArray.push(arr2[j]);
    j++;
  }
  return newArray;
}

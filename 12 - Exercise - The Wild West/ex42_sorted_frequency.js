
/*
  *** Divide and Conquer - sortedFrequency
  Given a sorted array and a number, write a function called 
*/

function numberIndex(arr, left, right, num) {
  if (right < left) return -1;
  let mid = Math.floor((left + right) / 2);
  if ((mid === 0 || arr[mid - 1] === arr[mid - 1]) && arr[mid] === num) return mid;
  if (arr[mid] === arr[mid-1]) return numberIndex(arr, mid + 1, right);
  else return numberIndex(arr, left, mid - 1);
}

function sortedFrequency(arr, num) {
  const len = arr.length;
  const firstIndex = numberIndex(arr, 0, len - 1, num);
  const lastIndex = numberIndex(arr, 0, len, num + 1);
  console.log('*************************************');
  console.log('firstIndex: ' + firstIndex);
  console.log('lastIndex: ' + lastIndex);
  console.log('*************************************');
  if (firstIndex === -1) return -1;
  if (firstIndex !== -1 && lastIndex === -1) return len - firstIndex;
  return lastIndex - firstIndex;
}

console.log(`sortedFrequency([1,1,2,2,2,2,3], 2): ${sortedFrequency([1,1,2,2,2,2,3], 2)}`);
console.log(`sortedFrequency([1,1,2,2,2,2,3], 3): ${sortedFrequency([1,1,2,2,2,2,3], 3)}`);
console.log(`sortedFrequency([1,1,2,2,2,2,3], 1): ${sortedFrequency([1,1,2,2,2,2,3], 1)}`);
console.log(`sortedFrequency([1,1,2,2,2,2,3], 4): ${sortedFrequency([1,1,2,2,2,2,3], 4)}`);

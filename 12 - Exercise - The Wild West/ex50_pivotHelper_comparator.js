
/**
 * 
 * @param {array} arr input array
 * @param {number} start input number
 */
function partition(arr, start = 0, cb) {
  const pivot = start;
  let pivotIdx = start;

  for (let i = 1; i < arr.length; i++) {
    if (
      (typeof cb === 'function' && cb(arr[i], arr[pivot]) < 0) ||
      (typeof cb !== 'function' && arr[i] < arr[pivot])
      ) {
      pivotIdx++;
      [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
    }
  }

  [arr[pivot], arr[pivotIdx]] = [arr[pivotIdx], arr[pivot]];

  return pivotIdx;
}

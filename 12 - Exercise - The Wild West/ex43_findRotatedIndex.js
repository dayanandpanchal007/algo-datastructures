
function binarySearch_itr(arr, ele) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while(left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === ele) return mid;
    if (arr[mid] < ele) left = mid + 1;
    if (arr[mid] > ele) right = mid - 1;
  }
  return -1;
}

function binarySearch_recur(arr, ele) {

  function findIndex(left, right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === ele) return mid;
    if (right === left) return arr[mid] === ele ? mid : -1;
    if (arr[mid] < ele) return findIndex(mid + 1, right);
    if (arr[mid] > ele) return findIndex(left, mid - 1);
  }

  return findIndex(0, arr.length - 1);
}

// condition: pivot idx is greater than its prev and next element
// if arr[mid] > arr[right] then assign left with mid + 1
// if arr[mid] < arr[right] then assign right with mid - 1
function findPivotIdx(arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[mid-1] && arr[mid] > arr[mid+1]) return mid;
    if (arr[mid] > arr[right]) left = mid + 1;
    if (arr[mid] < arr[right]) right = mid - 1;
  }
}

function findRotatedIndex(arr, ele) {
  const pivotIdx = findPivotIdx(arr);
  if (ele === arr[pivotIdx]) return pivotIdx;
  if (ele < arr[pivotIdx] && ele > arr[0]) return binarySearch_itr(arr.slice(0, pivotIdx), ele);
  const binaryIdx = binarySearch_itr(arr.slice(pivotIdx + 1), ele);
  if (binaryIdx === -1) return -1;
  return pivotIdx + binaryIdx + 1;
}


// *** find rotated index test
// console.log(`findRotatedIndex([3,4,1,2], 4): 1 === ${findRotatedIndex([3,4,1,2], 4)}`);
// console.log(`findRotatedIndex([6,7,8,9,1,2,3,4], 8): 2 === ${findRotatedIndex([6,7,8,9,1,2,3,4], 8)}`);
// console.log(`findRotatedIndex([6,7,8,9,1,2,3,4], 3): 6 === ${findRotatedIndex([6,7,8,9,1,2,3,4], 3)}`);
// console.log(`findRotatedIndex([37,44,66,102,10,22], 14): -1 === ${findRotatedIndex([37,44,66,102,10,22], 14)}`);
// console.log(`findRotatedIndex([6,7,8,9,1,2,3,4], 12): -1 === ${findRotatedIndex([6,7,8,9,1,2,3,4], 12)}`);
// console.log(`findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16): 5 === ${findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16)}`);

console.log(`findRotatedIndex([6,7,7,7,7,8,9,1,2,2,2,2,3,3,3,4], 3): 12 === ${findRotatedIndex([6,7,7,7,7,8,9,1,2,2,2,2,3,3,3,4], 3)}`)
// console.log(`findRotatedIndex([6,7,7,7,7,8,9,1,2,2,2,2,3,3,3,4], 7): 1 === ${findRotatedIndex([6,7,7,7,7,8,9,1,2,2,2,2,3,3,3,4], 7)}`)
// console.log(`findRotatedIndex([6,7,7,7,7,8,9,1,2,2,2,2,3,3,3,4], 17): -1 === ${findRotatedIndex([6,7,7,7,7,8,9,1,2,2,2,2,3,3,3,4], 17)}`)

// ***pivot element test
// console.log(`findRotatedIndex([3,4,1,2], 4): 1 === ${findRotatedIndex([3,4,1,2], 4)}`);
// console.log(`findRotatedIndex([6,7,8,9,1,2,3,4], 8): 3 === ${findRotatedIndex([6,7,8,9,1,2,3,4], 8)}`);
// console.log(`findRotatedIndex([6,7,8,9,1,2,3,4], 3): 3 === ${findRotatedIndex([6,7,8,9,1,2,3,4], 3)}`);
// console.log(`findRotatedIndex([37,44,66,102,10,22], 14): 3 === ${findRotatedIndex([37,44,66,102,10,22], 14)}`);
// console.log(`findRotatedIndex([6,7,8,9,1,2,3,4], 12): 3 === ${findRotatedIndex([6,7,8,9,1,2,3,4], 12)}`);
// console.log(`findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16): 5 === ${findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16)}`);


// ***binary search test iterative
// console.log(`binarySearch_itr([5,9,11,18,19,24,30,35,40,50], 11): 2 === ${binarySearch_itr([5,9,11,18,19,24,30,35,40,50], 11)}`);
// console.log(`binarySearch_itr([5,9,11,18,19,24,30,35,40,50], 35): 7 === ${binarySearch_itr([5,9,11,18,19,24,30,35,40,50], 35)}`);
// console.log(`binarySearch_itr([5,9,11,18,19,24,30,35,40,50], 5): 0 === ${binarySearch_itr([5,9,11,18,19,24,30,35,40,50], 5)}`);
// console.log(`binarySearch_itr([5,9,11,18,19,24,30,35,40,50], 50): 9 === ${binarySearch_itr([5,9,11,18,19,24,30,35,40,50], 50)}`);
// console.log(`binarySearch_itr([5,9,11,18,19,24,30,35,40,50], 100): -1 === ${binarySearch_itr([5,9,11,18,19,24,30,35,40,50], 100)}`);
// console.log(`binarySearch_itr([5,9,11,18,19,24,30,35,40,50], 0): -1 === ${binarySearch_itr([5,9,11,18,19,24,30,35,40,50], 0)}`);


// ***binary search test recursive
// console.log(`binarySearch_recur([5,9,11,18,19,24,30,35,40,50], 11): 2 === ${binarySearch_recur([5,9,11,18,19,24,30,35,40,50], 11)}`);
// console.log(`binarySearch_recur([5,9,11,18,19,24,30,35,40,50], 35): 7 === ${binarySearch_recur([5,9,11,18,19,24,30,35,40,50], 35)}`);
// console.log(`binarySearch_recur([5,9,11,18,19,24,30,35,40,50], 5): 0 === ${binarySearch_recur([5,9,11,18,19,24,30,35,40,50], 5)}`);
// console.log(`binarySearch_recur([5,9,11,18,19,24,30,35,40,50], 50): 9 === ${binarySearch_recur([5,9,11,18,19,24,30,35,40,50], 50)}`);
// console.log(`binarySearch_recur([5,9,11,18,19,24,30,35,40,50], 100): -1 === ${binarySearch_recur([5,9,11,18,19,24,30,35,40,50], 100)}`);
// console.log(`binarySearch_recur([5,9,11,18,19,24,30,35,40,50], 0): -1 === ${binarySearch_recur([5,9,11,18,19,24,30,35,40,50], 0)}`);


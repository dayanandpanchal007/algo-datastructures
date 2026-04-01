function getDigit(num, i) {
  // using this function may be helpful. good luck!
  return Math.floor((num / Math.pow(10, i)) % 10);
}

function digitCount(num) {
  // using this function may be helpful. good luck!
  return Math.abs(num).toString().length;
}

function mostDigits(nums) {
  // using this function may be helpful. good luck!
  let max = 0;
  let digits;
  for (let num of nums) {
      digits = digitCount(num);
      if (digits > max) max = digits;
  }
  return max;
}

function radixSort(nums) {
  // good luck!
  let arr = [];
  const maxDigits = mostDigits(nums);
  
  for (let i = 0; i < maxDigits; i++) {
      const buckets = Array.from({length: 10}, () => []);
      for (let num of nums) buckets[getDigit(num, i)].push(num);
      nums = [].concat(...buckets);
  }
  return nums;
}


// console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
console.log(`radixSort([23, 345, 5467, 12, 2345, 9852]): ${radixSort([23, 345, 5467, 12, 2345, 9852])}`);
console.log(`radixSort([3, 5, 7, 2, 5, 2]): ${radixSort([3, 5, 7, 2, 5, 2])}`);
console.log(`radixSort([3345, 523, 70374, 23946, 509, 2]): ${radixSort([3345, 523, 70374, 23946, 509, 2])}`);

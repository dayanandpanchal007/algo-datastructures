

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


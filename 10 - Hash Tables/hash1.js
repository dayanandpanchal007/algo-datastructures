
function hash(key, arrLen) {
  let total = 0;
  for (let char of key) {
    // map a to 1, b to 2...
    const value = char.charCodeAt(0) - 96;
    total = (total + value) % arrLen;
  }
  return total;
}


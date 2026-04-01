
function hash2(key, arrLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0);
    total = (total * WEIRD_PRIME + value) % arrLen;
  }
  return total;
}

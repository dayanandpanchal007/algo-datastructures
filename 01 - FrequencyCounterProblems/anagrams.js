/*
  Given two string, write a function to determine if the second string is an anagram of the first. An anagram is a word/phrace/name formed by rearranging the letters of another, such as cinema is formed from iceman.
*/

/**
 * @summary Time complexity is O(n)
 * @param {string} str1 Accepts string
 * @param {string} str2 Accepts string
 */
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  // frequencyCounter1 & frequencyCounter2 methodology can also be used here.
  const lookup = {};

  for (val of str1) {
    lookup[val] = ++lookup[val] || 1;
  }

  for (val of str2) {
    if (!lookup[val]) return false;
    else lookup[val]--;
  }

  return true;
}

const output1 = validAnagram('', '');
console.log(`('', ''): ${output1}`);

const output2 = validAnagram('aaz', 'zza');
console.log(`('aaz', 'zza'): ${output2}`);

const output3 = validAnagram('anagram', 'nagaram');
console.log(`('anagram', 'nagaram'): ${output3}`);

const output4 = validAnagram('rat', 'cat');
console.log(`('rat', 'cat'): ${output4}`);

const output5 = validAnagram('awesome', 'awesom');
console.log(`('awesome', 'awesom'): ${output5}`);

const output6 = validAnagram('qwerty', 'qeywrt');
console.log(`('qwerty', 'qeywrt'): ${output6}`);

const output7 = validAnagram('texttwisttime', 'timetexttwist');
console.log(`('texttwisttime', 'timetexttwist'): ${output7}`);

const output8 = validAnagram('cinema', 'iceman');
console.log(`('cinema, iceman'): ${output8}`)

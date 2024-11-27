/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let charCount = new Map();

  for (let char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!charCount.has(char) || charCount.get(char) === 0) {
      return false;
    }
    charCount.set(char, charCount.get(char) - 1);
  }

  return true;
};
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("a", "a")); // true
console.log(isAnagram("a", "b")); // false

// Implement a hash table from scratch.
let hash = {};

hash["key"] = "value";

// Write a function to find the first non-repeating character in a string using a hash map.

/**
 *
 * @param {String} str string to find the first non-repeating character
 * @returns {String} first non-repeating character
 * @description This function will find the first non-repeating character in a string using a hash map.
 * @example firstNonRepeatingCharacter("aabbccddeeffg") => "g"
 * @example firstNonRepeatingCharacter("aabbccddeeffg") => "g"
 * @author Arin
 */
const firstNonRepeatingCharacter = (str) => {
  const hash = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (hash[char]) {
      hash[char] = hash[char] + 1;
    } else {
      hash[char] = 1;
    }
  }
  console.log(hash);

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (hash[char] === 1) {
      return char;
    }
  }

  return null;
};


exports.module = { firstNonRepeatingCharacter };

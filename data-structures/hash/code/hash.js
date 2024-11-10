// basic hash with arrays

/**
 *
 * @param {Number[]} arr array of numbers
 * @param {Number} n find the count of this number in the hash
 * @returns {Number[]} hash
 * @example basicHashWithArrays([1, 2, 2, 3], 2) should return 2
 * @example basicHashWithArrays([1, 2, 2, 3], 3) should return 1
 * @description this function is representing a basic hash with arrays here we are counting the number of times a number is repeated in an array and storing it in a hash array
 * @author Arin
 * */
function basicHashWithArrays(arr, n) {
  let hash = [];
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      hash[arr[i]]++;
    } else {
      hash[arr[i]] = 1;
    }
  }

  console.log(`find count of ${n} in hash: ${hash[n]}`);
  return hash[n];
}

/**
 * @param {String[]} arr this will be list of characters lower case
 * @param {String} c this will be a character from a to z in lower case
 * @description find the count of a character in the array and store it in a hash array and return the hash array
 * @returns {Number} c this will be the count of the character in the array
 * @description find the count of a character in the array and store it in a hash array and return the hash array
 * @example basicHashWithArrays2(["a", "b", "c", "c", "c", "a", "b", "b", "c", "a", "c"], "c") should return 6
 * @example basicHashWithArrays2(["a", "b", "c", "c", "c", "a", "b", "b", "c", "a", "c"], "a") should return 3
 * @author Arin
 *
 * */
function basicHashWithArrays2(arr, c) {
  let hash = Array.from({ length: 26 }, () => 0);
  const getAscii = (char) => char.charCodeAt(0) - "a".charCodeAt(0);
  for (let i = 0; i < arr.length; i++) {
    const key = getAscii(arr[i]);
    if (hash[key]) {
      hash[key]++;
    } else {
      hash[key] = 1;
    }
  }
  return hash[getAscii(c)];
}

/**
 *
 * @param {Number[]} arr number array
 * @param {Number} n count of the number in the hash to be found
 * @returns {Number} count of the n in the hash
 * @description this function is representing a basic hash with map here we are counting the number of times a number is repeated in an array and storing it in a hash map and returning the count of the number in the hash map
 * @example basicHashWithMap([1, 2, 2, 3], 2) should return 2
 * @example basicHashWithMap([1, 2, 2, 3], 3) should return 1
 * @author Arin
 *
 */
function basicHashWithMap(arr, n) {
  const hap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hap.has(arr[i])) {
      hap.set(arr[i], hap.get(arr[i]) + 1);
    } else {
      hap.set(arr[i], 1);
    }
  }
  console.log(hap);
  return hap.get(n);
}

/**
 *  @param {String[]} arr this will be list of characters lower case
 *  @param {String} c this will be a character from a to z in lower case
 * @returns {Number} c this will be the count of the character in the array
 * @description find the count of a character in the array and store it in a hash map and return the hash map
 * @example basicHashWithMap2(["a", "b", "c", "c", "c", "a", "b", "b", "c", "a", "c"], "c") should return 6
 * @example basicHashWithMap2(["a", "b", "c", "c", "c", "a", "b", "b", "c", "a", "c"], "a") should return 3
 * @example basicHashWithMap2(["a", "b", "c", "c", "c", "a", "b", "b", "c", "a", "c"], "b") should return 3
 * @author Arin
 * */
function basicHashWithMap2(arr, c) {
  const hap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (hap.has(arr[i])) {
      hap.set(arr[i], hap.get(arr[i]) + 1);
    } else {
      hap.set(arr[i], 1);
    }
  }
  return hap.get(c);
}

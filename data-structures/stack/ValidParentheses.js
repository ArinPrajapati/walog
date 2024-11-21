/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
        console.log(map[s[i]]);
      stack.push(s[i]);
    } else {
      const last = stack.pop();
      if (s[i] !== map[last]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};


console.log(isValid("()")); // true
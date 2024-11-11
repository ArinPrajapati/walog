const fucntions = require("./basic");

const { firstNonRepeatingCharacter } = fucntions.module;
test("finds the first non-repeating character in a string", () => {
  expect(firstNonRepeatingCharacter("aabbccddeeffg")).toBe("g");
  expect(firstNonRepeatingCharacter("aabbccddseefe")).toBe("s");
  expect(firstNonRepeatingCharacter("aabbccddeeff")).toBe(null);
  expect(firstNonRepeatingCharacter("abcabc")).toBe(null);
  expect(firstNonRepeatingCharacter("a")).toBe("a");
  expect(firstNonRepeatingCharacter("")).toBe(null);
  expect(firstNonRepeatingCharacter("abacabad")).toBe("c");
});

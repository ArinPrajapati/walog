const isAnagram = require('../path/to/isAnagram');

test('valid anagrams', () => {
	expect(isAnagram('listen', 'silent')).toBe(true);
	expect(isAnagram('triangle', 'integral')).toBe(true);
});

test('invalid anagrams', () => {
	expect(isAnagram('hello', 'world')).toBe(false);
	expect(isAnagram('test', 'settle')).toBe(false);
});
const containsDuplicate = (nums) => {
    const numSet = new Set();
    for (const num of nums) {
        if (numSet.has(num)) {
            return true;
        }
        numSet.add(num);
    }
    return false;
};

test('returns true for an array with duplicates', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
});

test('returns false for an array without duplicates', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});

test('returns false for an empty array', () => {
    expect(containsDuplicate([])).toBe(false);
});

test('returns true for an array with negative duplicates', () => {
    expect(containsDuplicate([-1, -2, -3, -1])).toBe(true);
});

test('returns false for an array with one element', () => {
    expect(containsDuplicate([1])).toBe(false);
});
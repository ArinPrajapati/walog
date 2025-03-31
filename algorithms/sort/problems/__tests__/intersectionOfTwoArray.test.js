
test('intersectionOfTwoArray should return common elements between two arrays', () => {
    expect(intersectionOfTwoArray([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
    expect(intersectionOfTwoArray([1, 1, 2], [1, 2, 3])).toEqual([1, 2]);
    expect(intersectionOfTwoArray([], [1, 2, 3])).toEqual([]);
    expect(intersectionOfTwoArray([1, 2, 3], [])).toEqual([]);
    expect(intersectionOfTwoArray([1, 2, 3], [4, 5, 6])).toEqual([]);
});
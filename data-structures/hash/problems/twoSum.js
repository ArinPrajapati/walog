const findSum = (nums, target) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.get(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
  return null;
};

console.log(findSum([1, 2, 2, 4, 5], 4));

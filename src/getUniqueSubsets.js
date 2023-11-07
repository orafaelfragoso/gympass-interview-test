function getUniqueSubsets(nums) {
  const n = nums.length;
  const result = [];

  for (let i = 0; i < 1 << n; i++) {
    const subset = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        subset.push(nums[j]);
      }
    }
    result.push(subset);
  }

  return result;
}

module.exports = getUniqueSubsets;

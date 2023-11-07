const getUniqueSubsets = require("./getUniqueSubsets");

test("Empty set should have only one subset (empty set)", () => {
  const nums = [];
  const subsets = getUniqueSubsets(nums);
  expect(subsets).toEqual([[]]);
});

test("Test with a small set where order does not matter", () => {
  const nums = [1, 2, 3];
  const subsets = getUniqueSubsets(nums);
  const expectedSubsets = [
    [],
    [1],
    [2],
    [3],
    [1, 2],
    [1, 3],
    [2, 3],
    [1, 2, 3],
  ];

  expectedSubsets.forEach((subset) => {
    expect(subsets).toEqual(expect.arrayContaining([subset]));
  });
});

test("Test with a large set", () => {
  const nums = [1, 2, 3, 4];
  const subsets = getUniqueSubsets(nums);
  const expectedSubsets = [
    [],
    [1],
    [2],
    [3],
    [4],
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [3, 4],
    [1, 2, 3],
    [1, 2, 4],
    [1, 3, 4],
    [2, 3, 4],
    [1, 2, 3, 4],
  ];

  expectedSubsets.forEach((subset) => {
    expect(subsets).toEqual(expect.arrayContaining([subset]));
  });
});

test("Test with empty set and a non-empty set", () => {
  const emptySet = [];
  const nonEmptySet = [1, 2, 3];
  const subsets = getUniqueSubsets(nonEmptySet);
  expect(subsets).toContainEqual(emptySet);
});

test("Two empty sets should result in only one subset (empty set)", () => {
  const nums = [];
  const subsets = getUniqueSubsets(nums);
  expect(subsets).toEqual([[]]);
});

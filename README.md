# getUniqueSubsets

This repository contains a JavaScript function called `getUniqueSubsets` that generates all unique subsets of a set of integer numbers, as specified in the problem.

## Function `getUniqueSubsets`

The `getUniqueSubsets` function is responsible for generating unique subsets of a set of integer numbers. It uses bitwise manipulation to optimize the subset generation process. The function takes an array of integer numbers as input and returns an array of arrays containing all the unique subsets.

### Using the Function

```javascript
const getUniqueSubsets = require("./src/getUniqueSubsets");

const nums = [1, 2, 3];
const subsets = getUniqueSubsets(nums);
console.log(subsets);
```

## Running the Tests

This repository includes tests written using the native Node.js test library. The tests cover different scenarios to ensure that the `getUniqueSubsets` function works correctly.

Make sure you have Node.js version 21.1.0 or higher installed.

### Steps to Run the Tests

1. Clone this repository to your local environment.

2. Navigate to the repository folder:

```bash
cd path-to-repository
```

3. Run the tests:

```bash
npm test
```

This will execute the tests defined in the test file and display the results in the terminal.

## Test Scenarios

The tests include the following scenarios:

1. An empty set results in only one subset (an empty set).
2. Generating subsets for a small set where order does not matter.
3. Equal sets should be considered in a subset.
4. Efficient handling of a large set.
5. Inclusion of an empty set for a non-empty set and an empty set.
6. Two empty sets result in only one subset (an empty set).

Make sure the tests pass correctly after execution.

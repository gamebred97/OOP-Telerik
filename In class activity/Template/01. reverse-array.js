import { compareArrays, formatArray } from './common/utils.js';

/**
 * Reverse an array recursively
 * @param {array} array The array to reverse
 * @returns {array} The reversed array
 */
const reverse = (array) => {
  // your implementation:
  if (array.length === 0){
    return [];
  }

  let first = array[0];
  let last = reverse(array.slice(1));  

  return [...last, first]
  
};


const testCases = [
  { test: [1, 2, 3], expected: [3, 2, 1] },
  { test: [1.3, 5.2, 4.4, 2.4], expected: [2.4, 4.4, 5.2, 1.3] },
  { test: [1], expected: [1] },
  { test: [], expected: [] },
  { test: [5, 5, 5, 5, 5], expected: [5, 5, 5, 5, 5] },
];

testCases.forEach(({ test, expected }, index) => {
  // arrange & act
  const actual = reverse(test);

  // assert
  const result = compareArrays(expected, actual);

  const message = result
    ? 'Pass.'
    : `Fail. Expected: ${formatArray(expected)}. Actual: ${formatArray(
        actual
      )}`;

  console.log(`Test ${index + 1}: ${message}`);
});

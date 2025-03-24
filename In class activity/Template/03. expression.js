import { deepCompareObjects, formatObject } from './common/utils.js';



  // your implementation:
  const solve = (expression) => {
  
    if (!expression.includes('+') &&
        !expression.includes('*') &&
        !expression.includes('-') &&
        !expression.includes('/')) {
        return Number(expression);
    }
 
    const array = expression.split('');
    const operator = array.find(value => isNaN(Number(value)))
    
    let number = array.join('').slice(0, array.indexOf(operator));
    let rest;
    if (expression.includes('(')) {
        rest = array.join('').slice(array.indexOf(operator) + 2, array.length - 1);
    } else {
        rest = array.join('').slice(array.indexOf(operator) + 1)
    }
    
    switch (operator) {
        case '+':
            return Number(number) + solve(rest);
        case '-':
            return Number(number) - solve(rest);
        case '*':
            return Number(number) * solve(rest);
        case '/':
            return Number(number) / solve(rest);
            
    }
};



// Tests:
const testCases = [
  {
    test: '45+(55)',
    expected: 100,
  },
  {
    test: '45+(24*(12+3))',
    expected: 405,
  },
  {
    test: '12*(35-(46*(5+15)))',
    expected: -10620,
  },
  {
    test: '15',
    expected: 15,
  },
];

testCases.forEach(({ test, expected }, index) => {
  // arrange & act
  const actual = solve(test);

  // assert
  const result = deepCompareObjects(expected, actual);

  const message = result
    ? 'Pass.'
    : `Fail. Expected: ${formatObject(expected)}. Actual: ${formatObject(
      actual
    )}`;

  console.log(`Test ${index + 1}: ${message}`);
});

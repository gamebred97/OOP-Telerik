let input = ['7']

let print = this.print || console.log;

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const num = +gets();

const fibonacci = (input, memo = {}) => {
    if (input in memo) return memo[input];
    if (input <= 1) return input;
    
    return memo[input] = fibonacci(input - 1, memo) + fibonacci(input - 2, memo);
};

print(fibonacci(num))
let input = ['5']

let print = this.print || console.log;

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let num = +gets()

const factorial = (num) => {

    if (num <= 1){
        return 1;
    }

    return num * factorial(num - 1)
}

print(factorial(num))
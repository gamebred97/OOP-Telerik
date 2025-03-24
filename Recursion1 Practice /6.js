let input = ['49']

let print = this.print || console.log;

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let num = +gets();

const sumDigits = (input) => {

    if(input <= 0){
        return 0;
    }

 
    return input % 10 + sumDigits(Math.trunc(input / 10))
    

}

print(sumDigits(num))

// let number = 124
// number /= 10s
// console.log(Math.trunc(number));
// number /= 10

// console.log(Math.trunc(number));

// number /= 10

// console.log(Math.trunc(number));

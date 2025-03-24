let input = ['4']

let print = this.print || console.log;

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let bunnies = +gets()

const bunnyEars = (input) => {

    if (input <= 0){
        return 0;
    }

    return 2 + bunnyEars(input - 1)
}

print(bunnyEars(bunnies))
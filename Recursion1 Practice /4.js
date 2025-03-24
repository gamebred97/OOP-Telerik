let input = ['3']

let print = this.print || console.log;

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const bunnies = +gets();

const bunnyEars = (input) => {

    if (input <= 0){
        return 0;
    }

    if (input % 2 === 0){
        return 3 + bunnyEars(input - 1)
    } else {
        return 2 + bunnyEars(input - 1)
    }
}

print(bunnyEars(bunnies))
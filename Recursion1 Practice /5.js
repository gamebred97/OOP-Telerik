let input = ['3']

let print = this.print || console.log;

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const blocks = +gets();

function calcBlocks(input) {

    if (input <= 0){
        return 0;
    }

    return input + calcBlocks(input - 1)
} 

print(calcBlocks(blocks))
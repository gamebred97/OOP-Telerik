let input = ['11,11' ,'0']

let print = this.print || console.log;

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr = gets().split(',').map(Number)

const i = +gets()
const magicNum = 11;
let count = 0;

const array6 = (array, index, count) => {

    if (index >= array.length) {
        return count; 
    }

    if (array[index] === magicNum) {
        count++;
    }

    return array6(array, index + 1, count);  
}

print(array6(arr, i, count))  
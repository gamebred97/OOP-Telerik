let input = ['3,30' ,'0']

let print = this.print || console.log;

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr = gets().split(',').map(Number)

const i = +gets()

const array10 = (array, index) => {

    if (index > array.length - 1){
        return false;
    }

    if (array[index] * 10 === array[index + 1]){
        return true;
    }

    return array10(array, index + 1)
}

print(array10(arr, i))
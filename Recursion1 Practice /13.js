let input = ['1,4,6' ,'0']

let print = this.print || console.log;

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const arr = gets().split(',').map(Number)

const i = +gets()
const magicNum = 6;

const array6 = (array , index) => {

    if (index > array.length){
        return false;
    }
    

    if (array[index] !== magicNum){
        return array6(array , index + 1)
    } else {
        return true;
    }

    
}

print(array6(arr, i))
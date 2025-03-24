let input = ['xhixhix']

let print = this.print || console.log;

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const string = gets()
let count = 0;

const countX = (string) => {

    if (string.startsWith('hi')){
        count += 1;
    } 
    


    if(string.length < 2){
        return count;
    }

    return countX(string.slice(1))
}

print(countX(string))





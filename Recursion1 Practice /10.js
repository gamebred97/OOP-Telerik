let input = ['xhixhix']

let print = this.print || console.log;

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const string = gets()
let count = 0;

const countX = (string) => {

    const magicLetter = 'x';

    let first = string[0];
    let rest = string.slice(1);
    
    if(!first){
        return count;
    }

    if (first === magicLetter){
        count += 1;
    } 

    return countX(rest)
}

print(countX(string))
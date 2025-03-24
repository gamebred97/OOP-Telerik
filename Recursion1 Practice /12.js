let input = ['xpix']

let print = this.print || console.log;

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const string = gets()

const countX = (string) => {
    
        if(string.length < 2){
            return string;
        }

    if (string.startsWith('pi')){
      return '3.14' + countX(string.slice(2))
    } 
    


    return string[0] + countX(string.slice(1))
}

print(countX(string))



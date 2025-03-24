let input = ['3' , '2']

let print = this.print || console.log;

let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let b = +gets();
let n = +gets();

const powerN = (base , power) => {

    if (power <= 0){
        return 1;
    }

    return base * powerN(base, power - 1)
}

print(powerN(b, n))
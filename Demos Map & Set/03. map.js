
const map = new Map();

// add
map.set('Sofia', 1500000);
map.set('Varna', 200000);
map.set('Burgas', 70000);

// update
map.set('Burgas', 70001);

// delete
map.delete('Burgas');

// check for existence
console.log('Sofia exists? ' + map.has('Sofia'));
console.log('Burgas exists? ' + map.has('Burgas'));

// get value
console.log('Population of Sofia? ' + map.get('Sofia'));
console.log('Population of does not exist? ' + map.get('does not exist'));

// iterate:
for (const [key,value] of map) {
    const output = `${key} population: ${value}`
    console.log(output);
}


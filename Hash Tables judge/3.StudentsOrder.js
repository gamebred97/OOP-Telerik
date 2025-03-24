let input = ['5 3', 'Gosho Tosho Penka Miro Stanka', 'Miro Gosho', 'Gosho Stanka', 'Stanka Miro'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let [N, K] = gets().split(' ').map(Number)
let students = gets().split(' ')

let left = {};
let right = {}

for (let i = 0; i < N; i++) {
    if (i > 0) {
        left[students[i]] = students[i - 1];
    } else {
        left[students[i]] = null;
    }
    if (i < N - 1) {
        right[students[i]] = students[i + 1]
    } else {
        right[students[i]] = null;
    }
}

for (let i = 0; i < K; i++) {
    let [a, b] = gets().split(' ')
    
    if (left[a]) {
        right[left[a]] = right[a];
    }
    if (right[a]) {
        left[right[a]] = left[a];
    }

    left[a] = left[b];
    right[a] = b;
    
    if (left[b]) {
        right[left[b]] = a;
    }
    left[b] = a
}


let current = students.find(student => left[student] === null);


let result = [];
while (current !== null) {
    result.push(current);
    current = right[current];
}


print(result.join(' '));
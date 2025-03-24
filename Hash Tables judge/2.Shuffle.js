// let input = ['7 4' , '1 5 4 7'];
// let print = this.print || console.log;
// let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// const [N, K] = gets().split(' ').map(Number);

// const arr = Array.from({ length: N }, (_, i) => i + 1);

// const shuffledNum = gets().split(' ').map(Number)

//  for (let number of shuffledNum) {
 
//      let index = arr.indexOf(number);
//      if (index === -1) continue;
//      arr.splice(index, 1);

//     let newPosition;
//     //console.log(arr)
//     //2 ,3 ,4 , 5 ,6 ,7
      
//     //     if (newPosition === -1) continue;
//     //     if (index > newPosition) continue;

//         if (number % 2 === 0) {
//             newPosition = arr.indexOf(Math.floor(number / 2))
//         } else {
//             // newPosition = number * 2 <= N ? arr.indexOf(number * 2) + 1 : arr.length; 
//             if (number * 2 > N){
//                 newPosition = arr.indexOf(number * 2)
//                 if (number * 2 > N && number === shuffledNum){
//                     continue;
//                 }
//             }
//         }

//         arr.splice(newPosition, 0, number);
      
       
//         // if (newPosition !== index) {
//         //     arr.splice(newPosition, 0, number);
//         // }
     
//     }


// print(arr.join(' '))
// //splice(start, deleteCount)
// //splice(start, deleteCount, item1)


let input = ['7 4', '1 5 4 7'];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const [N, K] = gets().split(' ').map(Number)

const arr = Array.from({ length: N }, (_, i) => i + 1)

const shuffledNum = gets().split(' ').map(Number);

for (let number of shuffledNum) {
    const originalIndex = arr.indexOf(number);
    
    let originalNewPosition;

    if (number % 2 === 0) {
        const target = number / 2;
        const targetIndex = arr.indexOf(target)
        originalNewPosition = targetIndex + 1;

    } else {
        const target = number * 2 <= N ? number * 2 : N;
        const targetIndex = arr.indexOf(target)

        originalNewPosition = targetIndex + 1

        if (target === number) {
            continue
        }
    }
    
    arr.splice(originalIndex, 1)
    
    let adjustedNewPosition;
    if (originalIndex < originalNewPosition) {

        adjustedNewPosition = originalNewPosition - 1
    } else {
        adjustedNewPosition = originalNewPosition;
    }
    
    arr.splice(adjustedNewPosition, 0, number)
}

print(arr.join(' '));

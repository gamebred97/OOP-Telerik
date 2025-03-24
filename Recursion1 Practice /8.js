let input = ["8818"];

let print = this.print || console.log;

let gets =
  this.gets ||
  (
    (arr, index) => () =>
      arr[index++]
  )(input, 0);

let num = +gets();

const countOccurrence = (input) => {
  let magicNum = 8;

  if (input <= 0) {
    return 0;
  }

  let nextInput = Math.trunc(input / 10);



  if (input % 10 === magicNum && nextInput % 10 === magicNum) {
    return 2 + countOccurrence(Math.trunc(input / 10));
  } else if (input % 10 === magicNum) {
    return 1 + countOccurrence(Math.trunc(input / 10));
  } else {
    return 0 + countOccurrence(Math.trunc(input / 10));
  }
};

print(countOccurrence(num));

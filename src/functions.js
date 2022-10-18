console.clear();

function mSum(num1, num2) {
  let sum = num1 + num2;

  if (num2 == undefined) {
    console.log("this is an error, number missed");
  } else {
    return sum;
  }
}

console.log(mSum(96, 8));

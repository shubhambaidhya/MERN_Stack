// callback function
//? function which is passed as an argument to another function
//? is called callback function

const getSum = (x, y, func) => {
  let sum = x + y;
  func(sum);
};
getSum(5, 7, (value) => {
  console.log(value);
});

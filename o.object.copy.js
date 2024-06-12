// object
//? 1. structured data => key value pair => group of primary data types
//? 2. encapsulation => hide data, controlled access

const obj = {};

// Object.defineProperty(obj, "name", {
//   value: "Shubham",
//   enumerable: true,//false bhayo bhaney print garna mildaina
//   writable: true,//update bhayo bhanye garna mildaina
//   configurable: true,//false bhayo bhaney delete hudaina
// });
// delete obj.name;
// console.log(obj);

const laptopDetails = {
  name: "Acer Predator",
  brand: "Acer",
  ram: 16, //GB
  ssd: 512, //GB
};

let key = "ram";
console.log(laptopDetails[key]);

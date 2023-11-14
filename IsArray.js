/*
The Array.isArray() static method determines whether the passed value is an Array.
*/
const isArrayMethod = (value) => {
  // Getting rid of most of the false options
  if (typeof value !== "object") {
    return false;
  }
  // Make a string representing the type of the value, the toString method has to be called to properly check.
  let internalClass = Object.prototype.toString.call(value);
  return internalClass === "[object Array]";
};

//testing
console.log(isArrayMethod("[1,2,3]")); //false
console.log(isArrayMethod([1, 2, 3])); //true
console.log(isArrayMethod(new Array(5))); //true
console.log(isArrayMethod(new Int16Array([15, 33]))); //false
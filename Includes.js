/*
The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
*/

const includesMethod = (array, value, startingIndex) => {
  let doesItInclude = false;
  // i is the starting index so you can start at a certain position. If nothing is specified, it will start at 0
  for (let i = startingIndex || 0; i < array.length; i++) {
    // If the condition is met, then change doesItInclude to true and stop looping so the function can return true, otherwise it will remain false.
    if (array[i] === value) {
      doesItInclude = true;
      break;
    }
  }
  return doesItInclude;
};

// testing
const array1 = [1, 2, 3];
const pets = ["cat", "dog", "bat"];

console.log(includesMethod(array1, 2, 1)); //true
console.log(includesMethod(array1, 2, 2)); //false
console.log(includesMethod(array1, 7)); //false
console.log(includesMethod(pets, "cat")); //true
console.log(includesMethod(pets, "category")); //false
console.log(includesMethod(pets, 8)); //false

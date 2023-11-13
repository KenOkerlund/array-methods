/*
The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
*/

const includesMethod = (array, value, startingIndex) => {
  let doesItInclude = false;
  //Only loop as long as doesItInclude is false, once it becomes true the loops should stop because the condition has been met.
  if (!doesItInclude) {
    // i is the starting index so they can determine if they want to start at a certian position, if nothing is specified, it starts at 0
    for (let i = startingIndex || 0; i < array.length; i++) {
      // If the condition is met, then change doesItInclude to true so the function can return true, otherwise it will remain false.
      if (array[i] === value) {
        doesItInclude = true;
      }
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

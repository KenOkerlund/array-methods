/*
The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.
*/

const indexOfMethod = (array, value, startingIndex) => {
  let foundIndex = -1;
  // i is the starting index so you can start at a certain position. If nothing is specified, it will start at 0
  for (let i = startingIndex || 0; i < array.length; i++) {
    // if the condition is met, change foundIndex to the position it found the match and stop looping so the function can return the index, otherwise it returns -1
    if (array[i] === value) {
      foundIndex = i;
      break;
    }
  }
  return foundIndex;
};

//testing
const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(indexOfMethod(beasts, "bison")); // 1
console.log(indexOfMethod(beasts, "bison", 2)); // 4
console.log(indexOfMethod(beasts, "giraffe")); // -1

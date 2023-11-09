/*
The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.
*/

const array1 = [1, 2, 3, 4, 5, "a", "b", "c", "d", "e"];

const entriesMethod = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = [i, array[i]];
  }
  return newArray;
};

console.log(entriesMethod(array1));

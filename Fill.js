/*
The fill() method of Array instances changes all elements within a range of indices in an array to a static value.
It returns the modified array.
*/

const array1 = [1, 2, 3, 4, 5, "a", "b", "c", "d", "e"];

const fillMethod = (array, fillValue, startPosition, endPosition) => {
  const newArray = [...array];
  if (!endPosition) {
    for (let i = startPosition; i < array.length; i++) {
      newArray[i] = fillValue;
    }
  } else {
    for (let i = startPosition; i < endPosition; i++) {
      newArray[i] = fillValue;
    }
  }
  return newArray;
};

console.log(fillMethod(array1, "x", 3));
console.log(fillMethod(array1, "x", 3, 5));
console.log(fillMethod(array1, "x", 3, 20));
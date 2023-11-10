/*
The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
*/
const filterMethod = (array, callbackFunction) => {
  //create an empty array
  const newArray = [];
  //loop through the array and check the callback function on each iteration
  for (let i = 0; i < array.length; i++) {
    //if the result of the callback function is true, put it into the new array
    if (callbackFunction(array[i])) {
      newArray[newArray.length] = array[i];
    }
  }
  //return the new array
  return newArray;
};

//declaring the arrays to test with
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const numbers = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//declaring the callback functions to test
const isGreaterThanSix = (currentValue) => currentValue > 6;
const hasMoreThanSixCharacters = (currentValue) => currentValue.length > 6;

//testing the function
console.log(filterMethod(numbers, isGreaterThanSix)); // 10, 20, 40, 40, 50, 60, 70, 80, 90, 100
console.log(filterMethod(words, hasMoreThanSixCharacters)); // 'exuberant', 'destruction', 'present'

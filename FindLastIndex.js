/*
The findLastIndex() method of Array instances iterates the array in reverse order and returns the index of the first element that satisfies the provided testing function.
If no elements satisfy the testing function, -1 is returned.
*/

const findLastIndexMethod = (array, callbackFunction) => {
    for (let i = array.length; i > 0; i--) {
        if (callbackFunction(array[i])) {
            return i;
        }
    };
    return -1;
};

// Arrays for testing
const array1 = [5, 12, 8, 130, 4];
const array2 = [1, 2, 3, 4, 5];

// Callback for testing
const isGreaterThanThirteen = (currentValue) => currentValue > 13;

// Logs for testing
console.log(findLastIndexMethod(array1, isGreaterThanThirteen)); // 3
console.log(findLastIndexMethod(array2, isGreaterThanThirteen)); // -1
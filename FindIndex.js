/*
The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function.
If no elements satisfy the testing function, -1 is returned.
*/

const findIndexMethod = (array, callbackFunction) => {
    for (let i = 0; i < array.length; i++) {
        if (callbackFunction(array[i])) {
            return i;
        }
    };
    return -1;
};

// Arrays for testing
const array1 = [5, 12, 8, 130, 44];
const array2 = [1, 2, 3, 4, 5];

// Callback for testing
const isGreaterThanThirteen = (currentValue) => currentValue > 13;

// Logs for testing
console.log(findIndexMethod(array1, isGreaterThanThirteen)); // 3
console.log(findIndexMethod(array2, isGreaterThanThirteen)); // -1
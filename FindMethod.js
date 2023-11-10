/*
The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. 
If no values satisfy the testing function, undefined is returned.
*/

const findMethod = (array, callbackFunction) => {
    for (let i = 0; i < array.length; i++) {
        if (callbackFunction(array[i])){
            return array[i]
        }
    }
}

// callback functions to test with
const isGreaterThanTen = currentValue => currentValue > 10;

//arrays to test with
const array1 = [5,12,8,130,44];
const array2 = [1,2,3,4,5];

//logs for confirming test
console.log(findMethod(array1, isGreaterThanTen)) //12
console.log(findMethod(array2, isGreaterThanTen)) //undefined
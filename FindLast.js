/*
The findLast() method of Array instances iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function.
If no elements satisfy the testing function, undefined is returned.
*/

const findLastMethod = (array, callbackFunction) => {
    //start at the end of the array and iterate towards the start
    for (let i = array.length; i > 0; i--) {
        if (callbackFunction(array[i])){
            return array[i]
        }
    }
}

//callback functions to test with
const isGreaterThanTen = currentValue => currentValue > 10;

//arrays to test with
const array1 = [5,45,8,2,4];
const array2 = [1,2,3,4,5];

//logs for confirming test
console.log(findLastMethod(array1, isGreaterThanTen)) //45
console.log(findLastMethod(array2, isGreaterThanTen)) //undefined
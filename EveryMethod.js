/*
The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function.
It returns a Boolean value.
*/

const array1 = [1,2,3,4,5,4,3,2,1];
const array2 = [10,20,30,40,50,40,30,20,10];
const array3 = ["String1", "string2"];
const array4 = ["strings", 3]

const isBelowThreshold = (currentValue) => currentValue < 40;
const isString = (currentValue) => typeof currentValue === "string";

const everyMethod = (array, checkingParameter) => {
    let isThisTrue = true;
    array.forEach(element => {
         if (checkingParameter(element) === false){
            isThisTrue = false;
            return;
         }
    });
    return isThisTrue;
};

console.log(everyMethod(array1, isBelowThreshold)); //true
console.log(everyMethod(array2, isBelowThreshold)); //false
console.log(everyMethod(array3, isString)); //true
console.log(everyMethod(array4, isString)); //false
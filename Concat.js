/*
The concat() method of Array instances is used to merge two or more arrays.
This method does not change the existing arrays, but instead returns a new array.
*/

const array1 = ["a", "b", "c", "d","e"];
const array2 = ["f", "g", "h", "i", "j"];
const array3 = [1,2,3,4,5];

const concatArrays = (firstArray, secondArray) => {
    //Copy the contents of the first array
    const newArray = [...firstArray]
    //Append the contents of the second array
    newArray.push(...secondArray);
    return newArray;
}

const concatWithoutPush = (firstArray, secondArray) => {
    let newArray = [];
    //Loop through the first array
    for(let i = 0; i < firstArray.length; i++){
        //Essentially create a new index and make it's content the value of the current loop index
        newArray[newArray.length] = firstArray[i];
    }
    //Loop through the second array
    for(let j = 0; j < secondArray.length; j++){
        //Essentially create a new index and make it's content the value of the current loop index
        newArray[newArray.length] = secondArray[j]
    }
    return newArray;
}

const concatAnyAmountOfArrays = (...arrays) => {
    let newArray = [];
    //Make the concept recursive
    arrays.forEach(array => {
        //For each argument they give, loop through it's array
        for(let i = 0; i < array.length; i++){
        //Essentially create a new index and make it's content the value of the current loop index
            newArray[newArray.length] = array[i]
        }
    });
    return newArray;
}

const array4 = concatArrays(array1, array2)
const array5 = concatWithoutPush(array1, array2)
const array6 = concatAnyAmountOfArrays(array1, array2, array3)

console.log(array4)
console.log(array5)
console.log(array6)
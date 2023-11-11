/*
The forEach() method of Array instances executes a provided function once for each array element.
*/

const forEachMethod = (array) => {
    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

const array1 = [1, 2, 3, 4, '5', '6', '7', '8', '9'];
forEachMethod(array1)
/*
The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. 
Negative integers count back from the last item in the array.
*/

const searchArrayAtIndex = (array, index) => {
    //check if there is a negative index
    if(index < 0){
        //If there is a negative index, then take the length of the index and subract how far you want to go.
        //The reason for the addition operator is because you are adding a negative number.
        index = array.length + index;
    }
    //Once you have the positive or negative searching index, return that value.
    return array[index];
};

const array1 = [5, 12, 8, -4, 404];
console.log(searchArrayAtIndex(array1, -1)); // 404
console.log(searchArrayAtIndex(array1, 3)); // -4
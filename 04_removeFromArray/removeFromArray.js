const removeFromArray = function(array, ...elementToRemove) {
    for (const element of elementToRemove) // access the arguments passed to the function one by one
    {
        if (array.includes(element) ) // check if element to be remove is inside the array
        {
            // counts how many times the element to be remove exist in the array
            let count = array.filter((arrayElement) => arrayElement === element).length;

            for (let i = 0; i < count; i++){
                array.splice(array.indexOf(element), 1); // removes element from the array
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

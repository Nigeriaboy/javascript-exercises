const reverseString = function(word) {

    /** The split method will turn the word to an Array, the reverse method will reverse the array elements,
     * then the join element will join the array element to become a string again.
     */
    const reversedString = word.split("").reverse().join("");

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

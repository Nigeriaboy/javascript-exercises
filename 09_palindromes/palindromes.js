const palindromes = function (str) {
    let upperStr = str.toUpperCase();
    let arrayStr = upperStr.split(''); // Convert it into an array of characters

    function storeAlphaNumeric (arrayStr){
        let arr = [];

        for (let char of arrayStr){
            if (/[A-Z0-9]/.test(char)){ // using regex to check if the char is an alphabet or a number
                arr.push(char);
            } 
        }
        return arr;
    }

    let alphaNumeric = storeAlphaNumeric(arrayStr); // store only alphanumeric characters in an array
    let originalAlphaNumeric = alphaNumeric.join(''); // convert the array back to a string
    let reverseAlphaNumeric = alphaNumeric.reverse().join(''); // reverse the array and convert it back to a string

    return originalAlphaNumeric === reverseAlphaNumeric; // Return true if it is a palindrome, false otherwise
};

// Do not edit below this line
module.exports = palindromes;

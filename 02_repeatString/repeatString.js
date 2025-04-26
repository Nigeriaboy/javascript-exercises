const repeatString = function(word, num) {
    let wordText = '';
    if (num < 0) return 'ERROR';

    for (let i = 1; i <= num; i++){
        wordText += word;
    }
    return wordText;
};

// Do not edit below this line
module.exports = repeatString;

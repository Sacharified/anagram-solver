const sum = arr => arr.reduce((memo, val) => memo + val, 0);
const getWordAsNum = word => sum(word.split(``).map(char => char.charCodeAt(0)));
const isAnagram = (word, chars) => {
    for (char of chars) {
        if (!word.includes(char)) {
            return false;
        } else {
            word = word.replace(char, ``);
        }
    }

    return true;
}

module.exports = { sum, getWordAsNum, isAnagram };
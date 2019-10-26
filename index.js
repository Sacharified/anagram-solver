const { getWordAsNum, isAnagram } = require(`./utils`);
const fetch = typeof window === "undefined" ? require(`node-fetch`): window.fetch;

const defaultDictionary = `https://gist.githubusercontent.com/Sacharified/8e73828b9559abefde699d1ebd93e1ea/raw/3505330e49eac44e514e7dd5f2a8467067eca10c/asciiindexeddictionary.json`;

/**
 * @typedef {Object.<number, [string]>} Dictionary
 * @example
 * {
 *   1337: [`foo`, `bar`,],
 *   600: [`hello`, `world`]
 * }
 */


/**
 * 
 * @param {String} word chars to find anagram from
 * @param {Dictionary} dict Dictionary to find words in
 */
const findAnagrams = (word = ``, dict = {}) => {
    const num = getWordAsNum(word);
    if (!dict.hasOwnProperty(num)) return [];

    const chars = word.split(``);
    return dict[num].filter(word => isAnagram(word, chars));
}

/**
 * 
 * @param {String} chars characters to find anagrams from
 * @param {String} dictionary URL of JSON Dictionary
 */
const main = async (chars = ``, dictionary = defaultDictionary) => {
    let dict = {};
    try {
        const res = await fetch(dictionary);
        dict = await res.json();
    } catch (e) {
        console.error(`Failed to load dictionary`, e);
        return Promise.reject(e);
    }

    return findAnagrams(chars, dict);
};

module.exports = main;

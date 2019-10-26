const axios = require(`axios`);
const fs = require(`fs`);
const { getWordAsNum } = require(`./utils`);

const dictionaryUrl = `https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt`;

const getDictionary = () => {
    return axios.get(dictionaryUrl);
}

const main = async () => {
    const dict = await getDictionary();
    const arr = dict.data.split(`\r\n`);
    const indexes = arr.reduce((memo, word) => {
        const num = getWordAsNum(word);
        if (!memo.hasOwnProperty(num)) {
            memo[num] = [];
        }
        return {
            ...memo,
            [num]: [...memo[num], word]
        }
    }, {});

    const json = JSON.stringify(indexes);
    fs.writeFileSync(`data.json`, json, { flag: `w`, encoding: `utf8` });
}

main();

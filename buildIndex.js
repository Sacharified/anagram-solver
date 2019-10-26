const fs = require(`fs`);
const { getWordAsNum, fetch } = require(`./utils`);

const defaultDictionaryUrl = `https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt`;

const getDictionary = async (url = defaultDictionaryUrl) => {
    const res = await fetch(url);
    return await res.text();
}

const main = async () => {
    const dict = await getDictionary();
    const arr = dict.split(`\r\n`);
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

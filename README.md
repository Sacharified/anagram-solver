# Anagram Solver

Find all anagrams in a dictionary of a given set of characters (fast).

### Installation
`npm i anagram-solver`

### Usage
Returns a promise that resolves to an array of strings.

#### Using the default dictionary
```
const findAnagrams = require("anagram-solver");
const anagrams = await findAnagrams("spolo");
console.log(anagrams);
// ["loops", "polos", "pools", "sloop", "spool"]
```

#### Using another dictionary (JSON format)
```
findAnagrams(`spolo`, `https://link.to/my/dictionary.json`);
```
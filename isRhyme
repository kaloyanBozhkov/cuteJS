/* 
  WORD CHAIN CHALLENGE

  A word-chain is an array of words, where the next word is formed by either:
  1. Changing exactly one letter from the previous word.
  2. Adding or subtracting one letter.

  Notes:
  - You can only do one (not both) for each word change.
  - All words will be in lower-case.

  EXAMPLES:

  isWordChain(["row", "crow", "crown", "brown", "brawn"]) ➞ true
  // add "c" to "row" to get "crow", "n" to get "crown", etc.

  isWordChain(["flew", "flaw", "flan", "flat", "fat", "rat", "rot", "tot"]) ➞ true

  isWordChain(["meek", "meet", "meat", "teal"]) ➞ false
  // "meat" => "teal" changes 2 letters (can only change 1).

  isWordChain(["run", "runny", "bunny"]) ➞ false
  // "run" => "runny" adds 2 letters (can only add 1).
*/

const isWordChain = wordArr => !wordArr.some(checkWords)

const checkWords = (word, i, wordArr) =>  i > 0 && !((plusMinusOneLetter(word, wordArr[i - 1]) && !oneLetterChanged(word, wordArr[i - 1])) || (!plusMinusOneLetter(word, wordArr[i - 1]) && oneLetterChanged(word, wordArr[i - 1])))

//check letter has been added/removed, without any other changed letters									
const plusMinusOneLetter = (word, prevWord) => ((word.length === prevWord.length + 1) || (word.length === prevWord.length - 1)) && sameWordsWhenWithoutAdditionalLetter(word, prevWord)

//check only 1 letter has changed
const oneLetterChanged = (word, prevWord) => word.length === prevWord.length && word.split('').reduce((nDiffLtrs, letter, i) => nDiffLtrs + (letter === prevWord[i] ? 0 : 1), 0) === 1

const sameWordsWhenWithoutAdditionalLetter = (word, prevWord) => {

    //a is word with new character, b is old word. Regardless of order of parameters passed
    const a = word.length > prevWord.length ? word : prevWord
    const b = a === word ? prevWord : word

    //if new character appears, skip it! (only once, since +- 1 char constraint of difference)
    let ltrPos = 0
    
    //return a - b, e.g. coht - cat = ct
    const difference = a.split('').reduce((newStr, ltr, i) => {
    
        if (ltrPos === 0 && a[i] !== b[i]) ltrPos = 1
    
        return newStr + (a[i + ltrPos] === b[i] ? a[i + ltrPos] || '' : '')
    }, '')
    
    //true if original word equals new word without the added character 
    return difference === b
}

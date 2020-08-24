function findLongestWord(string = '') {
  let wordsArray = [];
  wordsArray = string.split(' ');
  let maxWordLength = wordsArray[0].length;
  let maxWord = wordsArray[0];
  for (const word of wordsArray) {
    if (word.length > maxWordLength) {
      maxWordLength = word.length;
      maxWord = word;
    } else continue;
  }
  return maxWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'

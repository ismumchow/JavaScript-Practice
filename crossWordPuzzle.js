// Ismum Chowdhury

// given 2d array of letters and a word
// return if the word can be found vertically

const matrix = [
  ['F', 'A', 'C', 'I'],
  ['O', 'B', 'Q', 'P'],
  ['A', 'N', 'O', 'B'],
  ['M', 'A', 'S', 'S']
]


const wordToSearch1 = 'FOAM'
const wordToSearch2 = 'MASS'
const wordToSearch3 = 'QOP'


function findWord(matrix, wordToSearch) {
  //e.g. FOAM
  const wordLength = wordToSearch.length  //4
  const wordArray = wordToSearch.split('')  //['F', 'O', 'A', 'M']
  const firstLetterToSearch = wordToSearch[0] //F

  // will iterate through the rows
  for (let i = 0; i < matrix.length; i++) {

    const currentArray = matrix[i] // currentArray is ['F', 'A', 'C', 'I'],
    const arrayIndexOfFirstLetter = currentArray.indexOf(firstLetterToSearch)
    if (arrayIndexOfFirstLetter == -1) {
      //we dont have a F in this array
      continue
    }

    //search across
    if (currentArray.length - arrayIndexOfFirstLetter >= wordLength) {
      //we have an F and the array length is long enough
      const possibleWordArrayFound = currentArray.slice(arrayIndexOfFirstLetter, wordLength)

      if (possibleWordArrayFound.join('') === wordArray.join('')) {  
        return true
      }

    }

    //search down
    if (matrix.length - i >= wordLength) {
      //we have a F and the matrix length is long enough

      let possibleWordArrayFound = []
      for (let j = 0; j < wordLength; j++) {
        possibleWordArrayFound.push(matrix[i + j][arrayIndexOfFirstLetter])
      }
      // console.log('here', JSON.stringify(possibleWordArrayFound))
      if (possibleWordArrayFound.join('') === wordArray.join('')) {
        return true
      }
    }
  }

  return false
}

console.log(wordToSearch1, findWord(matrix, wordToSearch1))
console.log(wordToSearch2, findWord(matrix, wordToSearch2))
console.log(wordToSearch3, findWord(matrix, wordToSearch3))






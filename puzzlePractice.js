
const matrix = [
  ['F', 'A', 'C', 'I'],
  ['O', 'B', 'Q', 'P'],
  ['A', 'N', 'O', 'B'],
  ['M', 'A', 'S', 'S']
]

console.log(matrix[2][2])
const wordToSearch1 = 'FOAM'
const wordToSearch2 = 'MASS'
const wordToSearch3 = 'QOP'

let puzzleFinder = function (puzzle,word) {
    const wordArr = word.split("");
    const firstChar = wordArr[0]

    for (let r = 0 ; r < puzzle.length; r++) {
        const currentRow = puzzle[r]; 
        console.log(currentRow)

        let firstCharacterIndex = currentRow.indexOf(firstChar)
        if(firstCharacterIndex === -1) {
            continue;
        } 

        //check horizontally
        if(currentRow.length - firstCharacterIndex >= wordArr.length) {
            let possibleWord = currentRow.slice(firstCharacterIndex)
            if( possibleWord.join("") === wordArr.join("")){
                return true
            }
        }

        if(puzzle.length - r >= wordArr.length) {
            let possibleWord = []
            let counter = 0;
            for(let i = 0; i < wordArr.length; i++) {
                possibleWord.push(puzzle[i + r][firstCharacterIndex])
            }
            console.log(possibleWord)
            if (possibleWord.join("")=== wordArr.join("")) return true; 
        }


  }
  return false
}


console.log(wordToSearch1, puzzleFinder(matrix, wordToSearch1))
console.log(wordToSearch2, puzzleFinder(matrix, wordToSearch2))
console.log(wordToSearch3, puzzleFinder(matrix, wordToSearch3))


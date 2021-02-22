const matrix = [
  ['F', 'A', 'C', 'I'],
  ['O', 'A', 'Q', 'P'],
  ['A', 'N', 'N', 'B'],
  ['M', 'A', 'S', 'S']
]

const wordToSearch1 = 'FOAM'
const wordToSearch2 = 'MASS'
const wordToSearch3 = 'FANS'
const wordToSearch4 = 'FONM'
const wordToSearch5 = 'MAQS'
const wordToSearch6 = 'FARG'

// console.log(wordToSearch1, findWord(matrix, wordToSearch1))
// console.log(wordToSearch2, findWord(matrix, wordToSearch2))
// console.log(wordToSearch3, findWord(matrix, wordToSearch3))


let findWord = function (matrix,word) {

    let wordArr = word.split(""); 
    let firstChar = wordArr [0];
    console.log(wordArr); 
    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i];
        let firstIndexOfChar = currentRow.indexOf(firstChar); 

        if (firstIndexOfChar === -1) {
            continue; 
        }
        let possibleWordArr = []
        for (let j = firstIndexOfChar; j < wordArr.length; j++) {
            possibleWordArr.push(currentRow[j]);
        }
        if(possibleWordArr.join("") === wordArr.join("")) return true;


        //Vertical check 
        let possibleWordVeritcal = []; 
        if (wordArr.length < matrix.length - i+1) {
            for (let k = i; k <wordArr.length; k++) {
                possibleWordVeritcal.push(matrix[k][firstIndexOfChar])
            }
            if (possibleWordVeritcal.join("") === wordArr.join("")) return true;
        }

        if (possibleWordVeritcal.length > 0 && possibleWordArr.length > 0) {
            let possibleWordDiagonol = []; 
            while (possibleWordDiagonol.length < wordArr.length) {
                possibleWordDiagonol.push(matrix[i++][firstIndexOfChar++])
            }; 
            console.log('diagnol word ' + possibleWordDiagonol)
            if(possibleWordDiagonol.join("") === wordArr.join("")) return true
        }
    }
    return false;
}

console.log(wordToSearch1, findWord(matrix, wordToSearch1))
console.log(wordToSearch2, findWord(matrix, wordToSearch2))
console.log(wordToSearch3, findWord(matrix, wordToSearch3))
console.log(wordToSearch4, findWord(matrix, wordToSearch4))
console.log(wordToSearch5, findWord(matrix, wordToSearch5))
console.log(wordToSearch6, findWord(matrix, wordToSearch6))
const matrix1 = [
  ['F', 'A', 'C', 'I'],
  ['O', 'O', 'Q', 'P'],
  ['A', 'N', 'X', 'B'],
  ['M', 'A', 'S', 'S']
]

//let crossword function take a 2d array and a word 

let findWord = function(matrix,word){ 
  let wordArr = word.split("");
  console.log(wordArr)
  let firstChar = wordArr[0];

  //since it is a 2d array, we will first iterate through the rows 

  for (let r = 0; r < matrix.length; r++) { 
    const currentRow = matrix[r]
    let firstIndex = currentRow.indexOf(firstChar)

    if(firstIndex === -1) { 
      continue;
    } 
    // first check if the word falls horizontally
    let possibleWordH =[]
    if(currentRow.length - firstIndex >= wordArr.length) {
      for(let i = firstIndex; i < firstIndex + wordArr.length; i++){
        possibleWordH.push(currentRow[i]);
      }
      if (possibleWordH.join("")=== wordArr.join("")) return true
    }
    // now we have to check if the word falls vertically
    let possibleWordV = []

    if(matrix.length - r >= wordArr.length) {
      for(let k = r; k < r + wordArr.length; k++){
        possibleWordV.push(matrix[k][firstIndex]);
      }
      if (possibleWordV.join("")=== wordArr.join("")) return true
    }
    // now we have to check if the word falls diagonally
  
    let possibleWordD =[]
    if(possibleWordV.length > 0 && possibleWordH.length > 0) {
      console.log("entered loop")
      for(let i = r; i < r + wordArr.length; i++){
        possibleWordD.push(matrix[i][firstIndex++]);
      }
      console.log(possibleWordD)
      if (possibleWordD.join("")=== wordArr.join("")) return true
    }
  }
  return false
}

const wordToSearch1 = 'FOAM'
const wordToSearch2 = 'MASS'
const wordToSearch3 = 'FOXS'


console.log(wordToSearch1, findWord(matrix1, wordToSearch1))
console.log(wordToSearch2, findWord(matrix1, wordToSearch2))
console.log(wordToSearch3, findWord(matrix1, wordToSearch3))



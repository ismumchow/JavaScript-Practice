const matrix = [
  ['F', 'A', 'C', 'I'],
  ['O', 'B', 'Q', 'P'],
  ['A', 'N', 'O', 'B'],
  ['M', 'A', 'S', 'S']
]

const w1 = "foam"

let exists = function (arr, word) {
   
    let wordArr = word.split(); 
    let rowLen = arr.length; 
    let colLen = arr[0].length 
    let firstChar = wordArr[0]; 
    let checkStr = ''


    for (let r = 0; r < rowLen; r++) {
        for (let c = 0; c < colLen; c++) {
            if (arr[r][c] === firstChar) {
               
            }
        }
    }



    console.log(`row length is ${rowLen} and col len is ${colLen}`); 










}

checkWord(matrix,w1)


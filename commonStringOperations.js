//common string operations

let ss = 'I Love Disney World'; 

let saddition = " so much I could live there"

let strA = "A"; 
let strB = "B"

let higherStr = function (a,b) { 
    if (a > b) return a 
    else return b;
}

// console.log(ss.indexOf('I')) // reads 0; 
// console.log(ss.indexOf('Love'))// reads 2;

// let combinedString = ss.concat(saddition); 

// console.log(combinedString)


// console.log(ss.charAt(4)); //essentially the opposite of indexOf, reads v 

// console.log(ss.slice(0,6)); //should read I love; the end should be one more than the last string index you want to include 
// //if you dont write another variable (just start) it will slice to the end



// console.log(higherStr(strA,strB));


const matrix = [
  ['F', 'A', 'C', 'I'],
  ['O', 'B', 'Q', 'P'],
  ['A', 'N', 'O', 'B'],
  ['M', 'A', 'S', 'S']
]

let currentArray = matrix [0]; 
let word = ["F","O","A","M"]; 
let index = 0; 
let possibleWordFound = currentArray.slice(index, index+ word.length);

console.log(possibleWordFound)






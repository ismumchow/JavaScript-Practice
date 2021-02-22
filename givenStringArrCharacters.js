let array1 = ['F','U','R','I','T'];
let word1 = "FRUIT";

let array2 = ['S', 'X','T','F','A',"E"]; 
let word2 = "FASTEX"


let stringBucket = function (arr,word){ 

    let wordArr = word.split("");
    let containsChars = true;
    let counter = 0;
    while (containsChars === true && counter < wordArr.length) {

        if (!(arr.includes(wordArr[counter++]))) {
            containsChars = false;
            return containsChars
        }
    }

    return containsChars;

}

if (stringBucket(array2,word2)) {
console.log(` the ${word2} can be assembled from the characters in array`)
}
else {
console.log (`it does not contain the necessary characters`)
}
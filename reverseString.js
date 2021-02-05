
var sampleStr = 'HELLOPALS'
reverseString = function (str) {
    var reversedArr = []; 
    var splitString = []; 
    splitString = str.split(''); 

    console.log(splitString)

    while(splitString.length > 0) { 
       reversedArr.push(splitString.pop());
   }

    var stringReversed = reversedArr.join().replace(/,/g, '')
   return stringReversed
}

var str1 = reverseString(sampleStr)
console.log(str1); 



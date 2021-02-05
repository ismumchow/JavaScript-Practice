
var sampleStr = 'HELLOPALS'; 
var sampleStr2 = 'TEST Case #2 !!!'

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
//TEST CASE 1
console.log(reverseString(sampleStr)); 


//much easier method 


function reverse (str) { 
    var reversedString = str.split('').reverse().join(); 
    return reversedString
}

//TEST CASE 2

console.log(reverse(sampleStr2))



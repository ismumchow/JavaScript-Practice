
var sampleStr = 'HELLOPALS'; 
var sampleStr2 = 'TEST Case #2 !!!'

//much easier method 


function reverse (str) { 
    var reversedString = str.split('').reverse().join(); 
    return reversedString
}

//TEST CASE 2

console.log(reverse(sampleStr2))



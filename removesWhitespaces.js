let sampleSentence = "Cats are better than dogs";
let rmDupstr = "SSSDDDDSSSRRRTTTSSSDDDSSS"

let removeDuplicatesFromString = function (str) {

    let strArr = str.split(""); 
    let breadCrumb = []; 

    for(let i = 0; i < strArr.length; i++){ 
        if (!breadCrumb.includes(strArr[i])) breadCrumb.push(strArr[i])
    }
    
    return breadCrumb.join()
}


//console.log(removeDuplicatesFromString(rmDupstr))



let rmWS = function (str) {
    str = str.replace(/\s/g, "");
    return str; 
}

let removeWhiteSpaces = function (str) {
    let strArr = str.split("")

    for (let i = 0; i < strArr.length; i++) {
        if(strArr[i] === " "){
            strArr.splice(i,1) //what index how many
        }
    }
    return strArr.join("")
}

console.log(removeWhiteSpaces(sampleSentence))

let reverseWords = function (str) {
    str = str.split(" ").reverse().join("")
    return str;
}

// console.log(reverseWords(sampleSentence))
// console.log(rmWS(sampleSentence))
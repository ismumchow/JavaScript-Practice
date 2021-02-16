let replaceAt = function(string,index,character) {
    return string.substr(0,index) + character + string.subtr(index + character.length);
}

let removeDuplicates = function(str) {
    let writeIndex = 0; 

    for(let i = 0; i < str.length; i++){
        let found  = false;
        for (let j = 0; j < writeIndex; j++) {
            if(str[i] === str [j]){
                found = true;
                break
            }      
        }
        if(!found) {
            str.replaceAt(str,writeIndex,str[i]);
            writeIndex++
        }
    }
    return str.substr(0,writeIndex)
};

removeDuplicates ('ISSMMMSDISMMUM')
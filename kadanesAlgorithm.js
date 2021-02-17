const sampleArray = [1,4,-2,4,3,2];

let max = function (a,b) {
    if (a > b) return a 
    else return b
}

let kadane = function (arr) {

    let maxCurrent = arr[0];
    let maxGlobal = arr[0]; 

    for(let i = 1; i <arr.length; i++){ 
        maxCurrent = max(arr[i], maxCurrent + arr[i])
        
        if(maxCurrent > maxGlobal) maxGlobal = maxCurrent;
        
        return maxGlobal
    }
}


kadane(sampleArray); 


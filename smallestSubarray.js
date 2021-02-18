
let smallestSubarray = function (arr,s) {

    let minLength = Infinity; 
    let windowStart= 0; 

    for(let windowEnd = 0; windowEnd <arr.length; windowEnd++){ 
        windowSum += arr[windowEnd]; 
        while (windowSum >= s) {
            minLength = Math.min(minLength,windowEnd - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart++;
        }   
    }

    if(minLength === Infinity) return 0
    return minLength; 
}
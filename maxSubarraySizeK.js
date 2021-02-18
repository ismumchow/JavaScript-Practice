

let max = function (a,b) {
    if (a > b) return a; 
    else return b;
}


let maxSubarray = function (k,arr) {
    //k is essentially the window size
    let maxSum = 0;
    let windowSum =0; // keeps track of the sum of all the elements in the window
    let windowStart =0 //essentially an i that keeps track of the window indices

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum += arr[windowEnd]; 

         if(windowEnd >= k-1) {
            maxSum = max(maxSum,windowSum)
            windowSum -= arr[windowStart];
            windowStart +=1;
        }
    }
    return maxSum;
}

console.log(`Maximum sum of a subarray of size K: ${maxSubarray(3, [2, 1, 5, 1, 3, 2])}`);
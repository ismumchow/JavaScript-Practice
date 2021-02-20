// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.


let maxSumSubarraySizeK = function (k,arr) {

    let maxSum = 0;
    let currentSum = 0; 
    let windowStart = 0; 

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {

        currentSum += arr[windowEnd]; 

        if(windowEnd-windowStart >= k-1) {
            maxSum = Math.max(maxSum,currentSum); 
            currentSum -= arr[windowStart];
            windowStart++;
        }
    }
    return maxSum;
}

// console.log(`Maximum sum of a subarray of size K: ${maxSumSubarraySizeK(3, [2, 1, 5, 1, 3, 2])}`);
// console.log(`Maximum sum of a subarray of size K: ${maxSumSubarraySizeK(2, [2, 3, 4, 1, 5])}`);


//

let smallestSubarrayGivenSum = function (sum,arr) {

    let minLength = Infinity; 
    let windowStart = 0; 
    let currentSum = 0; 

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        currentSum += arr[windowEnd]; 

        while (currentSum >= sum) { 
            minLength = Math.min(minLength, windowEnd-windowStart+1); 
            currentSum -= arr[windowStart]; //shrinks window to see if you can lower the length of substr
            windowStart++
        }

    }

    return minLength;

}
// console.log(`Smallest subarray length: ${smallestSubarrayGivenSum(7, [2, 1, 5, 2, 3, 2])}`);
// console.log(`Smallest subarray length: ${smallestSubarrayGivenSum(7, [2, 1, 5, 2, 8])}`);
// console.log(`Smallest subarray length: ${smallestSubarrayGivenSum(8, [3, 4, 1, 1, 6])}`);


let longestSubstringKDistinctCharacters = function (str, k) {
    let arr = str.split("")
    let windowStart = 0; 
    let maxLength = 0; 
    let CharFreq = { }

    for(let windowEnd =0; windowEnd <arr.length; windowEnd++) {
        let rightChar = arr[windowEnd]; 
        if(!(rightChar in CharFreq)) {
            CharFreq[rightChar] = 0; // if it does not exist in the object than create a property 
        }
        CharFreq[rightChar] += 1; 

            while (Object.keys(CharFreq).length > k) { // while the number of distinct characters is more than k
                    leftChar = arr[windowStart]; 
                    CharFreq[leftChar] -= 1; 
                    if (CharFreq[leftChar] === 0) {
                        delete CharFreq[leftChar];
                    }
                    windowStart++
            }
            maxLength = Math.max(maxLength, windowEnd-windowStart+1);
     }
     return maxLength
}


console.log(`Length of the longest substring: ${longestSubstringKDistinctCharacters('araaci', 2)}`);
console.log(`Length of the longest substring: ${longestSubstringKDistinctCharacters('araaci', 1)}`);
console.log(`Length of the longest substring: ${longestSubstringKDistinctCharacters('cbbebi', 3)}`);


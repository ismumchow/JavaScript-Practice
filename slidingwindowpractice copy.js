// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

let maxSumSubarraySizeK = function (k,arr) {
    // because k is constant size, we do not need to shrink the sliding window!!
    let maxSum = 0; 
    let windowSum = 0; 
    let windowStart = 0; 

    for (let windowEnd= 0; windowEnd < arr.length; windowEnd++){ 
        windowSum += arr[windowEnd]; 
        if (windowEnd >= k - 1){
            maxSum = Math.max (maxSum,windowSum); 
            windowSum -= arr[windowStart]; 
            windowStart++
        }
    }
    return maxSum;
}


// console.log(`Maximum sum of a subarray of size K: ${maxSumSubarraySizeK(3, [2, 1, 5, 1, 3, 2])}`);
// console.log(`Maximum sum of a subarray of size K: ${maxSumSubarraySizeK(2, [2, 3, 4, 1, 5])}`);

let smallestSubarrayWithGivenSum = function (sum,arr) {

    let minLength = Infinity; 
    let windowStart = 0; 
    let windowSum = 0;
    
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        windowSum += arr[windowEnd]; 

        while (windowSum >= sum) {
            minLength = Math.min(minLength,windowEnd - windowStart+1);
            //now we want to shrink the window to see if the minlength can be more
            //the reason that this all works is because the array is contigious
            windowSum -= arr[windowStart]; 
            windowStart++
        }
    }
    return minLength;
}
// console.log(`Smallest subarray length: ${smallestSubarrayWithGivenSum(7, [2, 1, 5, 2, 3, 2])}`);
// console.log(`Smallest subarray length: ${smallestSubarrayWithGivenSum(7, [2, 1, 5, 2, 8])}`);
// console.log(`Smallest subarray length: ${smallestSubarrayWithGivenSum(8, [3, 4, 1, 1, 6])}`);



let longestSubstringWithKDistinctCharacters = function (str,k) {
    let maxLength = 0;
    let arr = str.split('')
    let CharFreq = {};
    let windowStart = 0; 

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){ 

        let rightChar = arr[windowEnd]; 
        if(!(rightChar in CharFreq)){ 
            CharFreq[rightChar] = 0;
        }
        CharFreq[rightChar] +=1; 

        while (Object.keys(CharFreq).length > k) { //because there is now more than k letters, we have to reduce values that appear on the left side of the window
            let leftChar = arr[windowStart]; 
            CharFreq[leftChar] -= 1; // because it no longer will fall in the scope of the window, we reduce the number of instances by one 
            if(CharFreq[leftChar]=== 0) delete CharFreq[leftChar]
            windowStart++ 
        }

        maxLength = Math.max(maxLength, windowEnd-windowStart+1)
    }
    return maxLength;
}


// console.log(`Length of the longest substring: ${longestSubstringWithKDistinctCharacters('araaci', 2)}`);
// console.log(`Length of the longest substring: ${longestSubstringWithKDistinctCharacters('araaci', 1)}`);
// console.log(`Length of the longest substring: ${longestSubstringWithKDistinctCharacters('cbbebi', 3)}`);

// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.


let fruitBaskets = function (arr) {
    let fruitFreq = {}; // will hold the frequence of fruit as well as the number of different fruit 
    let windowStart = 0;
    let maxLength = 0; //also the max number of fruits because the array must be contiguous

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        let rightFruit = arr[windowEnd]; 
        if (!(rightFruit in fruitFreq)) {
            fruitFreq[rightFruit] = 0;
        }
        fruitFreq[rightFruit] += 1; 

        console.log(fruitFreq)

        while (Object.keys(fruitFreq).length > 2) {// if there are more than two types of fruit, shrink the window
            let leftFruit = arr[windowStart]; 
            fruitFreq[leftFruit] -= 1;
            if(fruitFreq[leftFruit] === 0) {
                delete fruitFreq[leftFruit]
            }
            windowStart++
        }
        maxLength = Math.max (maxLength, windowEnd - windowStart+1);
    }
    return maxLength
}


    console.log(`Maximum number of fruits: ${fruitBaskets(['A', 'B', 'C', 'A', 'C'])}`);
    console.log(`Maximum number of fruits: ${fruitBaskets(['A', 'B', 'C', 'B', 'B', 'C'])}`);






// 1.3 Removing duplicates of an array and returning an array of only unique elements1.3 Removing duplicates of an array and returning an array of only unique elements

let uniqueArr = function (arr) {
    let hashmap = { }; 
    let newArr = [];

    for (let i = 0; i < arr.length; i++) { 
        if (!(hashmap.hasOwnProperty(arr[i]))) {
            hashmap[arr[i]] = 1;
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
//Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element

let findLargestDifference = function (arr) {

    let currentLow = arr[0];
    let globalHigh = arr[1];
    let globalMaxDifference = globalHigh - currentLow; 

    for(let i =1 ; i < arr.length; i++){ 
        let currentMaxDifference = arr[i] - currentLow; 

        if (currentMaxDifference > globalMaxDifference) {
            globalMaxDifference = currentMaxDifference; 
            globalHigh = arr[i];
        }
        if (arr[i] < currentLow) {
            currentLow = arr[i]
        }
    }
    return globalMaxDifference
}

var array1 = [7, 8, 4, 9, 9, 15, 3, 1, 10];
console.log(findLargestDifference(array1));


//1.2 Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time
var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;

let findTheMissingNumber = function (arr,upperBound,lowerBound) {
    var sumOfIntegers = 0; 
    for (let i = 0; i < arr.length; i++) {
        sumOfIntegers += arr[i]
    };

    upperLimitSum = (upperBound * (upperBound +1))/2; 
    lowerLimitSum = (lowerBound * (lowerBound -1))/2; 

    theoreticalSum = upperLimitSum - lowerLimitSum; 
    return theoreticalSum - sumOfIntegers;
}

// findTheMissingNumber(arrayOfIntegers, upperBound, lowerBound); // 8

// (alternative 1.2 Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time)
let findMissNumber = function (arr) {
    let i = 0; 
    let length = arr.length; 
    //sorts the array so that the numbers are in their correct indices
    while (i < length) {
        let iVal = arr[i];  // should represent a val at the certain index
        if(arr[i] < length && arr[i] !== arr[iVal]){
            [arr[i],arr[iVal]] = [arr[iVal],arr[i]]
        }
        else {
            i++;
        }
    }
    // sees if i !== arr[i]
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            return i;
        }
    }
    return length; 
}

// console.log(findMissNumber([4, 0, 3, 1]));
// console.log(findMissNumber([8, 3, 5, 2, 4, 6, 0, 1]));

// variation 1.2 Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time
let findAllMissingNumbers = function (arr) {
    let allMissingNumbers = []; 
    let i = 0;
    let length = arr.length
    while (i < length) {
        let iVal = arr[i] -1;  // should represent a val at the certain index
        if( arr[i] !== arr[iVal]){
            [arr[i],arr[iVal]] = [arr[iVal],arr[i]]
        }
        else {
            i++;
        }
    }
    for (let i =0; i < arr.length; i++){ 
        if (arr[i]!== i+1){ 
            allMissingNumbers.push(i+1)
        }
    }
    return allMissingNumbers;
}

// console.log(findAllMissingNumbers([4, 0, 3, 1, 6]));
// console.log(findAllMissingNumbers([8, 3, 5, 4, 6, 0, 1]));


// 1.1 Given an array of integers, find the largest product yielded from three of the integers

let largestProduct = function  (arr) {
    let sortedArr = arr.sort((a,b) => a -b);
    console.log(sortedArr)
    let minProd = 1;
    let maxProd = 1;
    
    minProd = sortedArr[0] * sortedArr[1] * sortedArr[sortedArr.length-1]; 

    for(let i = sortedArr.length -3; i< sortedArr.length; i++){
        console.log (sortedArr[i])
        maxProd *= sortedArr[i]; 
    }

    if (maxProd > minProd) return maxProd;
    else return minProd;
}

var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];
console.log(largestProduct(unsortedArray)); // 21000


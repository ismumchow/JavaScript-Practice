let find_averages_of_subarrays = function (k,arr) {
// let k be the window size
let arrayAverages = [];
let windowStart = 0;
let currentArray = [];


for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    currentArray.push(arr[windowEnd]);

    while(currentArray.length > 5) {
        currentArray.shift();
    }

    if (currentArray.length === 5) {
        let totalSum = 0;
        currentArray.forEach(element => {
            totalSum+= element
        })
    arrayAverages.push(totalSum/5)
    }
}
return arrayAverages
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);


// alternative method 



let averageSubarray = function (k, arr) {
    let windowStart = 0;
    let currentSum = 0;
    let result = [];

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
        currentSum += arr[windowEnd];

        if(windowEnd >= k-1) {
            result.push(currentSum/5);
            currentSum -= arr[windowStart];
            windowStart++;
        }
    }
    return result;
}


const result1 = averageSubarray(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result1}`);

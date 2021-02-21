//

let bruteForcePairTarget = function (arr,target) {

    let result = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            let sum = arr[i] + arr[j]
            console.log(sum)
            if ((sum) === target){ 
              result = [j,i]
            }
        
        }

    }
    return result;
}

let pairTarget = function (arr,target) {
    let targetSum = target; 
    let currentSum = 0; 
    let leftPtr = 0; 
    let rightPtr = arr.length-1; 
    while (leftPtr < rightPtr) {
        currentSum = arr[leftPtr] + arr[rightPtr];
        if (currentSum === targetSum) {
            return [leftPtr,rightPtr];
        }
        else {
            if (currentSum > targetSum) {
                rightPtr--;
            }
            else if (currentSum < targetSum) {
                leftPtr++
            }
        }
    }
    return [-1,-1]
}

console.log(pairTarget([1, 2, 3, 4, 6], 6));
console.log(pairTarget([2, 5, 9, 11], 11));
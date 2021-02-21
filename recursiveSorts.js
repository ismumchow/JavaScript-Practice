// merge and quick sort

let sampleArr = [12,7,4,9,4,3,1]


function mergeRecursive (array){
     if (array.length <= 1) return array
     let lh = array.slice(0,array.length/2)
     let rh = array.slice(array.length/2)
     let ls = mergeRecursive(lh)
     let rs = mergeRecursive(rh) 
    
      return Merge(ls,rs)
}


function Merge(left,right) { 
   let result = []
   let iLeft = 0; 
   let iRight = 0;
    while (result.length < left.length + right.length) {
        if(iLeft === left.length) result = result.concat(right.slice(iRight));
        else if(iRight === right.length) result = result.concat(left.slice(iLeft));
        else if(left[iLeft] > right[iRight]) result.push(right[iRight++])
        else  result.push(left[iLeft++])
    }
    return result
}

let sortedArr = mergeRecursive(sampleArr);
console.log(sortedArr);



function quickSortRecursive(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = partition(arr, start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    quickSortRecursive(arr, start, index - 1);
    quickSortRecursive(arr, index + 1, end);
    
    return arr
}

function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};

function quickSort (arr) {
    quickSortRecursive(arr,0,arr.length-1)
}; 

// quickSort(sampleArr);
// console.log(sampleArr);


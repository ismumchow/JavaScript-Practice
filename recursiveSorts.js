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

// let sortedArr = mergeRecursive(sampleArr);
// console.log(sortedArr);

function quickSort (arr) {
    qs (arr,0,arr.length-1)
}; 
function qs(arr,l,r) {
    if (l >= r) {
        return 
    }
    p = partition(arr,l,r)
    qs(arr, l, p-1); 
    qs(arr, p+1, r); 
}

function partition (arr,l,r) {
    pivot = arr[r] //pivot is generally just set to the last val 
    i = l-1; 
       for (j = 0; j < r-1; j++) {
        if (arr[j] < pivot) {
            i++; // i keeps track of the rightmost index that is left of the pivot, so everytime there is a variable there is a pivot that is less than the pivot, i++ and then you swap that current val arr[j] with the arr[i]
            
            var temp = arr[j] 
            arr[j] = arr[i]
            arr[i] = temp; 
            var temp2 = arr[i+1]; // swaps the pivot into its correct position
            arr[i+1] = arr[r];
            arr[r] = temp2; 
            return i+1
        }
    }
}
 quickSort(sampleArr);
console.log(sampleArr);


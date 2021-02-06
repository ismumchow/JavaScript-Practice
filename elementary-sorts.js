const sampleArr = [12,4,3,7,9]

const swap = function (arr,var1,var2) {
    let temp = arr[var1]; 
    arr[var1] = arr[var2]; 
    arr[var2] = temp;
    return arr;
}



//bubbleSort 
function bubbleSort (arr) {
    for (let i = 0; i< arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                arr = swap (arr,j,j+1);
            }
        }
    }
    return arr;
}

//selection sort

function selectionSort (arr) {
    arr.forEach(function (element,index) {
        let minVal = element; 
        let minIndex = index; 
        for (let i = index; i < arr.length; i++) {
            if(arr[i] < minVal) {
                minVal = arr[i]; 
                minIndex = i; 
            }
        }
        arr = swap(arr,index, minIndex); 
    });
    return arr;
}




//insertion sort
function insertionSort (arr) {
    for (let i = 0; i < arr.length; i++){ 
        let currentVal = arr[i]; 
        let compareIndex= i-1
        while (compareIndex >=0 &&  currentVal < arr[compareIndex]) {
            arr = swap (arr, i , compareIndex); 
            i = compareIndex; 
            compareIndex --;
        }
    }
    return arr
}


// let sortedArr = selectionSort(sampleArr); 
// let sortedArr = insertionSort(sampleArr); 


//console.log(sortedArr);
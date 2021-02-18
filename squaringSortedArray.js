let squareNum = function(arr) {

    for(let i= 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    arr = arr.sort()
    return arr;
}


let sampleArr = [-2, -1, 0, 2, 3]

console.log(squareNum(sampleArr));
let squareNum = function(arr) {

    for(let i= 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    arr = arr.sort()
    return arr;
}


let squareNumNew = function (arr) {
    let newArr =[];
    for (let i = 0; i <arr.length; i++) {
        let currentVal = Math.abs(arr[i]);
        newArr.push(currentVal); 
    }
    let midpoint = Math.floor(arr.length/2); 
    let counter = 0; 
    while(counter <midpoint) {
        newArr.push(newArr.shift());
        counter++
    }
    return newArr;
}


let sampleArr = [-2, -1, 0, 2, 3]

console.log(squareNumNew(sampleArr));
let rotateArr = function (arr,num) {
    let counter = 0;
    if (num === 0) return arr;
    else if (num < 0) {
        while (counter < num * -1) {
            let headVal = arr.shift()
            arr.push(headVal);
            counter++
        }
    }
    else {
        while(counter < num) {
            let temp = arr.pop()
            arr.unshift(temp)
            counter++;
        }
    }
}

let arr = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];

// console.log("Array Before Rotation");
// console.log(arr)

// rotateArr(arr, 2);

// console.log("Array After Rotation");
// console.log(arr)

console.log("Array Before Rotation");
console.log(arr)

rotateArr(arr, -2);

console.log("Array After Rotation");
console.log(arr)
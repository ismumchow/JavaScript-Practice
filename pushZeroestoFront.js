let v = [1, 10, 20, 0, 59, 63, 0, 88, 0];

function pushZeroestoFront (arr) {
    let resultArr = []; 
    for(let i =0; i<arr.length;i++){
        if(arr[i]===0) resultArr.push(arr[i])
    }
    for(let i =0; i<arr.length;i++) {
        if(arr[i] !== 0) resultArr.push(arr[i])
    }
    return resultArr;
}

console.log("Original Array: [" + v + "]");

let newArr = pushZeroestoFront(v);

console.log("After Moving Zeros: [" + newArr + "]");

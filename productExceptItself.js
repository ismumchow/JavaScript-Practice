var firstArray = [2, 2, 4, 1];
var secondArray = [0, 0, 0, 2];
var thirdArray = [-2, -2, -3, 2];


let productExceptSelf = function (arr) {
  let resultArr = [];

  for (let i = 0; i <arr.length;i++){
    let prod = 1;
    for(let j= 0; j <arr.length; j++){ 
      if (i !== j) prod *= arr[j]
    }
    resultArr.push(prod)
  }
  return resultArr;
}

console.log(productExceptSelf(firstArray)); // [8, 8, 4, 16]
console.log(productExceptSelf(secondArray)); // [0, 0, 0, 0]
console.log(productExceptSelf(thirdArray)); // [12, 12, 8, -12]
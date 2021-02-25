var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

let insterSectionTwoArrays = function (arr1,arr2){ 
    let hashMap ={}; 
    let intersectionArray = []

    arr1.forEach(element => {
        hashMap[element] = 1;
    });

    arr2.forEach(element => {
        if(hashMap[element]=== 1){
            intersectionArray.push(element)
            hashMap[element] += 1;
        }
    })
    return intersectionArray;
}

console.log(insterSectionTwoArrays(firstArray,secondArray));
let removeDuplicates = function (arr) {

let duplicates = []

    for(let i = 0; i < arr.length; i++) {
        if(!(duplicates.includes(arr[i]))) {
            duplicates.push(arr[i])
        } 
    }

    return duplicates

}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(removeDuplicates([2, 2, 2, 11]));

//alternate version with a hash map; 

let removeDuplicatesAlternate = function (arr){ 
    let uniqueArr = [];
    let hashMap = {}; 

    for (let i = 0; i < arr.length; i++) {
        if (!(hashMap.hasOwnProperty(arr[i]))){ 
            hashMap[arr[i]] = 1; 
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr;
}


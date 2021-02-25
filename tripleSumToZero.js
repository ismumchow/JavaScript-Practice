let tripleSumToZero = function (arr){ 
    let tripletResult = []
    let sortedArr = arr.sort ((a,b)=> a-b);

  
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            for (let k = 2; k < arr.length; k++) {
                if(((arr[i] + arr[j] + arr[k]) === 0)){
                    if(i !== j && j!== k) {
                        tripletResult.push[[i,j,k]]
                    }
                } 
             }
        }
    }
    return tripletResult

}

console.log(tripleSumToZero([-3, 0, 1, 2, -1, 1, -2]));
console.log(tripleSumToZero([-5, 2, -1, -2, 3]));


let tripletSumCloseToTarget = function (arr,target) {
    let tripletResult = []
    let globalSum = 0;
    let counter = 0;
    let globalDifference = 0; 
 
    let sortedArr = arr.sort ((a,b)=> a-b);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            for (let k = 2; k < arr.length; k++) {
                let sum = arr[i] + arr[j] + arr[k];
                let currentDifference =  Math.abs(target - sum);
                if(currentDifference < globalDifference){
                    globalDifference === currentDifference;
                    globalSum = sum
                    counter = 0; 
                    counter++;
                } 
                if(currentDifference === globalDifference){
                    globalDifference === currentDifference;
                    globalSum = sum;
                    counter++
                } 
             }
        }
    }
    return globalSum;
}
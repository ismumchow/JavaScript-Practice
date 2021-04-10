let tripSumToZero = function (arr, targetSum){
 arr.sort((a,b)=> a-b);
 const triplets = []

    for (let i = 0; i < arr.length; i++){
      if( i> 0 && arr [i]=== arr[i+1]){
        continue;
      } 
    searchPair(arr,-arr[i],i+1,triplets);
    }
  return triplets

}

let searchPair = function (arr, triplets, leftPtr, rightPtr, targetSum ){
  let rightPtr = arr.length-1;
    for(let i = 0; i < arr.length; i++){
      if(arr[leftPtr]+ arr[rightPtr] === targetSum){
        triplets.push([-targetSum,leftPtr,rightPtr])
        rightPtr--;
        leftPtr--;

        while(leftPtr < rightPtr && arr[leftPtr] === arr[leftPtr-1]) {
            leftPtr++
        }
        while(leftPtr < rightPtr && arr[rightPtr] === arr[rightPtr+1]) {
            rightPtr--
        }
        
      }
      else if (arr[leftPtr]+ arr[rightPtr] < targetSum){
          leftPtr++
      }
      else {
        rightPtr--;
      }
      
    }
}

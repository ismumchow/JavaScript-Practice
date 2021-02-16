let sampleArr = [1,4,4,6,0,4,0,8,0,74,12,12,2,0];

let moveZerosToLeft = function(arr) {
   if(arr.length <= 1) {
       return arr;
   }
   let arrLen = arr.length; 
   let writeIndex = arrLen-1; //last index of arr
   let readIndex = arrLen -1; //last index of arr

   while (readIndex >= 0) { 
       if(arr[readIndex != 0]) {
           arr[writeIndex] = arr[readIndex];
           writeIndex--
       }
       readIndex--;
   }
   while (writeIndex >= 0){
       arr[writeIndex] = 0;
       writeIndex--
   }
}

moveZerosToLeft(sampleArr);
console.log(sampleArr);
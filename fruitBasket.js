// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

// You can start with any tree, but you can’t skip a tree once you have started. 
let fruitBasket = function (arr) {
    let windowStart = 0; 
    let fruitCount = {};
    let maxFruit = 0; 

    for (let windowEnd = 0; windowEnd <arr.length; windowEnd++) {
        let rightFruit = arr[windowEnd]; 
        if (!(rightFruit in fruitCount)) {
            fruitCount[rightFruit] = 0;
        }
        fruitCount[rightFruit] +=1; 

        while(Object.keys(fruitCount).length > 2) {
            let leftFruit = arr[windowStart]; 
            fruitCount[leftFruit] -= 1;
            if(fruitCount[leftFruit]=== 0) {
                delete fruitCount[leftFruit]
            }
            windowStart++;
        }
        maxFruit = Math.max(maxFruit,windowEnd-windowStart+1)

        
    } 
    return maxFruit;
}

console.log(`Maximum number of fruits: ${fruitBasket(['A', 'B', 'C', 'A', 'C'])}`);
console.log(`Maximum number of fruits: ${fruitBasket(['A', 'B', 'C', 'B', 'B', 'C'])}`);
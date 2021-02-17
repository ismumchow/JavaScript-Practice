//kadane algorithm

let findBuySellStockPrices = function(array) {
    //if the length of the array does not exist and or is smaller than two exit
    if(!array || array.length < 2) {
        return;
    }
    //sets base parameters where  the first buy is the first item in the array and the first sell is the second item in the array
    //global sell and profit keeps track of the highest values  

    let currentProfit = 0;
    let currentBuy = array[0]; //smallest number you have seen so far
    let globalSell = array[1];
    let globalProfit = globalSell - currentBuy;

    for (let i = 1; i < array.length; i++) {
        //where array[i] would be the current price that we are selling at
        currentProfit = array[i] - currentBuy;

        if (currentProfit > globalProfit) {
        globalProfit = currentProfit; // if there is a bigger margin than we hold that value as it becomes the new high
        globalSell = array[i]; //we keep track of the new high selling price and set it to the global val
        }
        // we want the buy prices to be as low as possible, so if the current value is less than the buy value, we make the buy value to that minimum value
        if (array[i] < currentBuy) {
        currentBuy = array[i];
        } 
    }
    return [globalSell - globalProfit, globalSell];
};

let arrayForStockPrices = [1, 2, 3, 4, 3, 2, 1, 2, 5];
let result = findBuySellStockPrices(arrayForStockPrices);
console.log("Buy Price: " + result[0] + ", Sell Price: " + result[1]);
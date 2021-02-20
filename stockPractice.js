let stockSell = function (arr){
    let currentProfit = 0; 
    let currentBuy = arr[0]; 
    let globalSell = arr[1] 
    let globalProfit = globalSell - currentBuy; 

     if(!arr || arr.length < 2) {
        return;
    }


    for (let i = 1; i < arr.length; i++ ) {
        currentProfit = arr[i] - currentBuy; 

        if (currentProfit > globalProfit) { 
            globalProfit = currentProfit;
            globalSell = arr[i]
        }
        if(currentBuy > arr[i]) {
            currentBuy = arr[i]
        }
    }
    return [globalSell-globalProfit,globalSell]
}

let arrayForStockPrices = [1, 2, 3, 4, 3, 2, 1, 2, 5];
let result = stockSell(arrayForStockPrices);
console.log("Buy Price: " + result[0] + ", Sell Price: " + result[1]);
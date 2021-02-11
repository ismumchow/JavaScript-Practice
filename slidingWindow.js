let findMaxSlidingWindow = function (arr, windowSize) {
    let result =[] // holds max values of the window
    if(!arr.length) return result; 
    if(windowSize > arr.length) return result; 

    // get the max val for the first window 
    let window = []

    for(let i = 0; i < windowSize; i++) {
        //pop the value of the tail of the window if the current value is higher than the tail value of the window
        while(window.length > 0 && arr[i] > arr[window[window.length-1]]) {
            window.pop();
        } 
        window.push(i)
    }
    result.push(arr[window[0]]);

    // need to get the max for the rest of the windows 

    for (let i = windowSize; i < arr.length; i++) {
        while( window.length > 0 && arr[i] > arr[window[window.length-1]]) { 
            window.pop()
        }
        if(window.length > 0 && window[0] <= i - windowSize) {
            window.shift()
        }
        window.push(i); 
        result.push(arr[window[0]]);
        //if the index is no longer in the scope of the window, than remove from scope
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array = " + array);
console.log("Max = " + ffindMaxSlidingWindow(array, 3));
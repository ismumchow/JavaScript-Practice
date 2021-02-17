let cyclicSort = function (arr) {
    let i = 0; 
    while (i < arr.length) {
        const j = arr[i] - 1;  //j is one less than the value of nu
        if(arr[i] !== arr[j]) {
            [arr[i],arr[j]] = [arr[j],arr[i]]; //swap values of elements to its correct position on the array (think of j as indices values)
        }
        else {
            i += 1; 
        }
    }
    return arr;
}
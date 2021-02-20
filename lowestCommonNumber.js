let findLeastCommonNumber = function (a,b,c) {
    let i= 0; 
    let j=0;
    let k =0;
    while(i < a.length && j < b.length && k < c.length) { 
        if (a[i] === b[j] && b[j] === c[k]) return a[i];
        
        if (a[i] <= b[j] && a[i] <= c[k]) i++
        else if (b[j] <= a[i] && b[j] <= c[k]) j++ 
        else if (c[k] <= a[i] && c[k] <= b[j]) k++
    }
    return -1;
}




let v1 = [6, 7, 10, 25, 30, 63, 64];
let v2 = [1, 4, 5, 6, 7, 8, 50];
let v3 = [1, 6, 10, 14];
console.log("Least Common Number: " + findLeastCommonNumber(v1, v2, v3));
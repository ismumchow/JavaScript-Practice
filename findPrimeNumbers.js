const sampleArr = [1,2,3,4,5,6,7,8,9,10]

function isPrime(num) {
    for (var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    console.log(arr); // use arr result on your own
}



console.log(display(100));
// Dijkstra's Algorithm or Greatest Common Divisor

function Dijkstra(num1,num2) {
    if (num1 === num2) return num1
    else if (num1 > num2) return Dijkstra(num1 - num2, num2)
    else return Dijkstra(num1, num2-num1)
}

function RecursiveFactorial (num) {
    if (num <= 1) return num
    else return num * RecursiveFactorial(num-1);
}

function fibs (num) {
    if (num ===1 || num === 0) {
        return num
    }
    else return fibs(num-1) + fibs(num-2);
}

function reverseString (str) {
    if (str === '') return str 
    return str[str.length-1] + reverse(str.substr(0,str.length-1));
} 

var sample = Dijkstra(48,36)
console.log(sample)
console.log(RecursiveFactorial(5));
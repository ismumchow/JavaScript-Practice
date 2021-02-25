//stackPractice.js 

//implement a queue using double stack 

class QueueTwoDoubleStacks {

    constructor (){ 
        inputStack = []; 
        outputStack =[];
    }

    enqueue (val) {
        inputStack.push(val);
    }
    dequeue (){
        let len = inputStack.lenght; 
        while (outputStack.length < len){
            outputStack.push(inputStack.pop())
        }
        return outputStack.pop()
    }
}

let BKLine  = new QueueTwoDoubleStacks; 

BKLine.enqueue("Nawal"); 
BKLine.enqueue("Rafi");
BKLine.enqueue("Nawal"); 
BKLine.enqueue("Rafi");
BKLine.dequeue("Nawal"); 
BKLine.enqueue("Rafi");

console.log(BKLine)


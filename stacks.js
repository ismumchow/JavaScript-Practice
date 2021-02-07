
function Stack (capacity) {
    this.storage = []
    this.capacity = capacity;
    this.count = 0; 
}

Stack.prototype.push = function(val) {
    if (this.count >= this.capacity) return console.log('cap reached, please pop')
    this.storage.push (val)
    this.count++
}

Stack.prototype.pop = function () {
    this.storage.pop(); 
}

Stack.prototype.peek = function() {
    return this.storage[--this.count]
}

Stack.prototype.count = function () {
    return this.count
}


const Chips = new Stack(7); 

Chips.push('lays');
Chips.push('pringle');
Chips.push('cheetos');
Chips.push('fritos');
Chips.push('cheetos');
Chips.push('fritos');
Chips.push('doritos')


console.log(Chips)

console.log(Chips.peek())



function Queue (capacity) {
    this.capacity = capacity || Infinity; 
    this.storage = []
    this.count = 0; 
}

Queue.prototype.enqueue = function (val) {
    if(this.count < this. capacity) {
    this.storage.push (val)
    count++ }
    else return 'cap reached. please dequeue'
    
}

Queue.prototype.dequeue = function (val) {
    this.storage.shift()
}

Queue.prototype.peek = function (){ 
    return this.storage[--this.count]
}

Queue.prototype.count = function () {
    return this.count()
}
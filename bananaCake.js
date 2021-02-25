class LinkedList { 

    constructor () {
        this.head = {val = this.val , next = null}; 
        this.tail = this.head; 
    }
    addNode (val) { 
        let Node = {val = this.val, next = null}; 
        this.tail.next = Node; 
        this.tail = Node;
    }
    deleteTail () { 
        let previousNode = this.head; 
        let currentNode = previousNode.next; 
        while (currentNode.next){
            let previousNode = currentNode; 
            let currentNode= currentNode.next;
        }
        previousNode.next = currentNode.next;
        this.tail = previousNode;
    }
    deleteNode (val) {
        let previousNode = this.head; 
        let currentNode = previousNode.next; 
        while (currentNode.val !== val){
            let previousNode = currentNode; 
            let currentNode= currentNode.next;
        }
        previousNode.next = currentNode.next; 
        currentNode = currentNode.next;
    }
    head () {
        return this.head;
    }
    tail (){
        return this.tail
    }
}

let IsmumsBoys = new LinkedList; 

IsmumsBoys.addNode("Afnan")
console.log(IsmumsBoys)

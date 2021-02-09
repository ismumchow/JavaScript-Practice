class LinkedList { 
    constructor (val) {
        this.head = {val, next : null},
        this.tail = this.head
    }
    addNode (val) {
        const node = {val,next:null}
        this.tail.next = node; 
        this.tail = node;
    }
    removeTail () {
        let previousNode = this.head; 
        let currentNode = previousNode.next; 

        while(currentNode.next) {
            previousNode = currentNode;
            currentNode  = currentNode.next
        }
        
        this.tail = previousNode;
        this.tail.next= null;
        
    }
    removeNode (val) {
        let previousNode = this.head; 
        let currentNode = previousNode.next; 

        while(currentNode.next) {
            if(currentNode.val === val) {
                currentNode = currentNode.next;
                previousNode.next = currentNode; 
                break;
            }
            else {
            previousNode = currentNode;
            currentNode  = currentNode.next
            }
        }

        console.log( `node that contains the value:${val} has been removed`);
    }
    tail() {
        return this.tail; 
    }
    head() {
        return this.head;
    }
}

const IsmumsHomies = new LinkedList('Afnan');
IsmumsHomies.addNode('Nawal')
IsmumsHomies.addNode('Rafi')
IsmumsHomies.addNode('Injo')

IsmumsHomies.removeNode('Nawal')
IsmumsHomies.removeNode('Rafi');
IsmumsHomies.removeTail()



console.log(IsmumsHomies);
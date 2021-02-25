class LinkedList {

    constructor(val) {
       this.head = {val, next: null}
       this.tail = this.head
    }
    insert (val) { 
        const node = {val, next:null}
        this.tail.next = node; 
        this.tail = node; 
    }
    remove (val) {
        if (val === this.head.val) {
            this.head = this.head.next2
        }
        else{
            let previousNode = this.head; 
            let currentNode = previousNode.next; 
            
            while (currentNode) {
                if (currentNode.val === val) {
                    previousNode.next = currentNode.next; 
                    currentNode = currentNode.next; 
                    break; 
                }
                else {
                    previousNode = currentNode; 
                    currentNode = currentNode.next
                }
            }
        }
 

    }
    removeTail () {
        let currentNode = this.head; 

        while(currentNode.next !== this.tail) {
            currentNode= currentNode.next;
        }
         currentNode.next= null; 
         this.tail = currentNode;
         
    }
    contains(val) {

        let currentNode = this.head; 
        while(currentNode.val!== this.val) {
            currentNode= currentNode.next;
            if(currentNode.next === null) return false   
            else if (currentNode.val === val) return true
        }
    }
    isHead () { return this.head }
    isTail () { this.tail }

}

var IsmumFavorite = new LinkedList ('Chips'); 
IsmumFavorite.insert('Candy')
IsmumFavorite.insert('Cookies')
IsmumFavorite.insert('Browinies');



console.log(IsmumFavorite.contains('Candy'))
console.log(IsmumFavorite.contains('Jolly Rancher'));
console.log(IsmumFavorite.contains('M & Ms'))

IsmumFavorite.remove('Candy')



console.log(IsmumFavorite)



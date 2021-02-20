class HashTable { 

    constructor (val){
        this.storage = []
        this.tableSize = val;
    }
    insert (key,val) {
        const index = this._hash(key,this.tableSize)
        this.storage[index] = value;
    }
    retrive (val){

    }
    remove (val){

    }
    _hash(str,n){
        let sum = 0; 
        for(let i =0; i <str.length; i++){
            sum+= str.charCodeAt(i) * 3
        }
        return sum%n;
    }
}

    const myHT  = new HashTable; 
    console.log(myHT)

    myHT.insert('a',1)







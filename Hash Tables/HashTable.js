/*
Key-Value pair
We run this throught a hash. Convert all letter to ASCII numerical value, goes throught a math equation and creata a number, and get an object back.
And give us an address.

Two charteristics of Hashes
- Are one way, you just can convert the letters to the location in space in memory.
- Are deterministics, always produce the same number.

There are collision on hash tables when an item maps to thr same spot in memory.

Separate chaining is the way we can hace multiple items on thr same spor in memory.
Linear probing is a way to save an item on a different spot in memory, is used for open addresses.


Is always O(1)
*/

class HashTable {
    constructor(size=7){
        this.dataMap=new Array(size);
    }

    //A method that only can be used for other methods
    _hash(key){
        let hash= 0
        for(let i=0;i<key.length;i++){
            hash = (hash + key.charCodeAt(i)*23) % this.dataMap.length
        }
        return hash
    }

    set(key, value){
        let index = this._hash(key)
        if(!this.dataMap[index]){
            this.dataMap[index] = []
        }
        this.dataMap[index].push([key, value])
    }

    get(key){
        let index = this._hash(key)
        if(this.dataMap[index]){
            for(let i=0;i<this.dataMap[index].length;i++){
                if(this.dataMap[index][i][0]==key){
                    return this.dataMap[index][i][1] //return value
                }
            }
        }
        return undefined
    }

    keys(){
        let allKeys = []
        for(let i=0; i<this.dataMap.length;i++){
            if(this.dataMap[i]){
                for(let j=0;j<this.dataMap[i].length;j++){
                    allKeys.push(this.dataMap[i][j][0]);
                }
            }
        }
        return allKeys
    }
}

//Interview question
function itemInCommon(arr1,arr2){
    let obj={}
    for(let i =0;i<arr1.length;i++){
        obj[arr1[i]] = true
    }
    for(let j =0;j<arr2.length;j++){
        if(obj[arr2[j]]) return true
    }
    return false
}

console.log(itemInCommon([1,2,3],[4,5,6]))


/*

The linked lists are similar to an array without indexes, but now it has a head and a tail, at the beginning and the end respectively.
And the last node points to null.
Linked lists are placed all over the place in memory and an array is a continous place in memory

*/

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1
    }
    //Insert a Node at the end of the LinkedList
    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;
        return this;
    }
    //Insert the node at the beginning of the LinkedList
    unshift(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next=this.head;
            this.head=newNode;   
        }
        this.length++;
        return this;
    }
    //Insert the node in an especific index
    insert(index, value){
        
        if(index===0) return this.unshift(value);
        if(index===this.length) return this.push(value);
        if(index<0 || index>this.length) return false;

        const newNode = new Node(value);
        let temp=this.get(index-1);
        newNode.next=temp.next;
        temp.next=newNode;
        this.length++;
        return true

    }
    //Eliminate the last Node of the LinkedList
    pop(){
        if(!this.length) return undefined;
        
        let temp = this.head;
        let prev = this.head;
        while(temp.next){
            prev = temp
            temp = temp.next;
        }
        this.tail = prev
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
    //Elimiantes the first Node
    shift(){
        if(!this.head) return undefined
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if(this.length===0){
            this.tail = null;
        }
        return temp;
    }
    //Get node of a particular index
    get(index){
        if(index<0 || index>=this.length) return undefined;

        let temp = this.head;
        for(let i = 0; i<index;i++){
            temp=temp.next
        }
        return temp
    }
    //Set a value on a certain index
    set(index, value){
        let temp = this.get(index);
        if(temp){
            temp.value = value;
            return true
        }
        return false;
    }
    //Remove a node at specific index
    remove(index){
        if(index<0 || index>=this.length) return undefined;
        if(index===0) return this.shift();
        if(index===this.length) return this.pop()

        const prev = this.get(index-1)
        const temp = prev.next

        prev.next=temp.next;
        temp.next=null;
        this.length--;
        return temp
    }
    //Reverse the linkedList
    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = temp.next
        let prev = null

        for(let i=0;i<this.length;i++){
            next = temp.next
            temp.next=prev
            prev = temp
            temp=next
        }
        return this
    }
}





class Nodo {
    data;
    next;

    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    head;
    size;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        let node = new Nodo(data);
        let current = null;
        if (this.head === null) {
            this.head = node;
        }else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    
    remove(data) {
        let current = this.head;
        if (current === null) {  //empty list
            return;
        }

        let previous = null;
        while ((current !== null) && (current.data !== data)) {
            previous = current;
            current = current.next;
        }
        if (current === null) {  //the node to be deleted does not exist
            return;
        }
        if (previous === null) {  //the node to be deleted is the first one
            this.head = current.next;
        }else {
            previous.next = current.next;
        }
        this.size--;
    }
    
    getSize() {
        return this.size;
    }

    find(data) {
        let current = this.head;
        while ((current !== null) && (current.data !== data)) {
            current = current.next;
        }
        if (current === null) {  //the node does not exist
            return null;
        }
        if (current.data === data) {  //node was found
            return current;
        }
    }

    printList() {  //own method (not required by the exercise)  
        if (this.head === null) {
            console.log("Empty list");
        }else {
            let current = this.head;
            while (current !== null) {
                console.log(current.data);
                current = current.next;
            }
        }
    }
}


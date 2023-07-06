class Nodo<T> {
    data: T;
    next: Nodo<T> | null;

    constructor(data: T, next: (Nodo<T> | null) = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList<T> {
    head: Nodo<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data: T) {
        const node = new Nodo(data);
        let current: (Nodo<T> | null) = null;
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
    
    remove(data: T) {
        let current: (Nodo<T> | null) = this.head;
        if (current === null) {  //empty list
            return;
        }

        let previous: (Nodo<T> | null) = null;
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

    find(data: T) {
        let current: (Nodo<T> | null) = this.head;
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
            let current: (Nodo<T> | null) = this.head;
            while (current !== null) {
                console.log(current.data);
                current = current.next;
            }
        }
    }
}


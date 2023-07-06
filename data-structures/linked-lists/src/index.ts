class Nodo<T> {
    data: T;
    nextNode: Nodo<T> | null;

    constructor(data: T, nextNode: (Nodo<T> | null) = null) {
        this.data = data;
        this.nextNode = nextNode;
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
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = node;
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
            current = current.nextNode;
        }
        if (current === null) {  //the node to be deleted does not exist
            return;
        }
        if (previous === null) {  //the node to be deleted is the first one
            this.head = current.nextNode;
        }else {
            previous.nextNode = current.nextNode;
        }
        this.size--;
    }
    
    getSize() {
        return this.size;
    }

    find(data: T) {
        let current: (Nodo<T> | null) = this.head;
        while ((current !== null) && (current.data !== data)) {
            current = current.nextNode;
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
                current = current.nextNode;
            }
        }
    }

    invert() {
        let current = this.head;
        if (current === null) {  //empty list
            return;
        }
        const array: Nodo<T>[] = [];
        while (current !== null) {
            array.push(current);
            current = current.nextNode;
        }
        for (let i = array.length - 1; i >= 0; i--) {
            if (i === array.length - 1) {
                this.head = array[i];
                current = this.head;
                current.nextNode = array[i-1];
            }else if (i === 0) {
                current = array[i];
                current.nextNode = null;
            }else {
                current = array[i];
                current.nextNode = array[i-1];
            }

        }
        /*let next;
        let previous;
        while (current !== null) {
            if (current === this.head) {
                current.next = null;
            }
            current.next = previous;

        }
        let newList: (LinkedList<T> | null);*/
    }
}


/*
const lista = new LinkedList<number>();
lista.add(1);
lista.add(2);
lista.add(3);
lista.add(4);
lista.printList();
console.log("-----------");

lista.remove(2);
lista.printList();
console.log("-----------");
lista.remove(5);
lista.printList();
console.log("-----------");

console.log(lista.find(4));
console.log(lista.find(5));
console.log("-----------");

console.log("INVERT");
lista.invert();
lista.printList();
*/

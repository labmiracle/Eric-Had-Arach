export default class Queue<T> {
    protected elements: T[]; 
    
    constructor() {
        this.elements = [];
    }

    enqueue(element: T) {
        this.elements.push(element);
    }

    dequeue() {
        return this.elements.shift();
    }

    size() {
        return this.elements.length;
    }
}
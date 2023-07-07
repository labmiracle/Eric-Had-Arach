class Stack<T> {
    protected values: T[];

    constructor() {
        this.values = [];
    }
    
    push(data: T) {
        this.values.push(data);
    }

    pop() {
        return this.values.pop();
    }

    size() {
        return this.values.length;
    }
}







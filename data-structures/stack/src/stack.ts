export default class Stack<T> {
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

    print() {
        for (let i = this.values.length - 1; i >= 0; i--) {
            console.log(this.values[i]);
        }
    }
}
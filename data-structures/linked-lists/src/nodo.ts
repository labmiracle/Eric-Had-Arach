export default class Nodo<T> {
    data: T;
    nextNode: Nodo<T> | null;

    constructor(data: T, nextNode: (Nodo<T> | null) = null) {
        this.data = data;
        this.nextNode = nextNode;
    }
}
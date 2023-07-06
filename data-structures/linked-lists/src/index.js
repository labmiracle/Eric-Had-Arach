var Nodo = /** @class */ (function () {
    function Nodo(data, next) {
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return Nodo;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Nodo(data);
        var current = null;
        if (this.head === null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    };
    LinkedList.prototype.remove = function (data) {
        var current = this.head;
        if (current === null) { //empty list
            return;
        }
        var previous = null;
        while ((current !== null) && (current.data !== data)) {
            previous = current;
            current = current.next;
        }
        if (current === null) { //the node to be deleted does not exist
            return;
        }
        if (previous === null) { //the node to be deleted is the first one
            this.head = current.next;
        }
        else {
            previous.next = current.next;
        }
        this.size--;
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    LinkedList.prototype.find = function (data) {
        var current = this.head;
        while ((current !== null) && (current.data !== data)) {
            current = current.next;
        }
        if (current === null) { //the node does not exist
            return null;
        }
        if (current.data === data) { //node was found
            return current;
        }
    };
    LinkedList.prototype.printList = function () {
        if (this.head === null) {
            console.log("Empty list");
        }
        else {
            var current = this.head;
            while (current !== null) {
                console.log(current.data);
                current = current.next;
            }
        }
    };
    return LinkedList;
}());
var lista = new LinkedList();
lista.add(1);
lista.add(2);
lista.add(3);
lista.add(4);
lista.printList();
lista.remove(2);
lista.printList();
lista.remove(5);
lista.printList();
console.log(lista.find(4));
console.log(lista.find(5));

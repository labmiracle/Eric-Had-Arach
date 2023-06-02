// Implemente su propia función reduce

Array.prototype.myReduce = function(callback) {
    const array = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            array.push(this[i]);
        }
    }
    return array;
}
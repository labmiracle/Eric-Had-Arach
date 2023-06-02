// Implemente su propia función filter

Array.prototype.myFilter = function(callback) {
    const array = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            array.push(this[i]);
        }
    }
    return array;
}
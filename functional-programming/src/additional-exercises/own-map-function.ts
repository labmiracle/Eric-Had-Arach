// Implemente su propia función map

Array.prototype.myMap = function(callback) {
    const array = [];
    for (let i = 0; i < this.length; i++) {
        array.push(callback(this[i]));
    }
    return array;
}
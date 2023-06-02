// Implemente su propia función reduce

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator;
    let thereIsInitialValue;
    
    if (initialValue === "undefined") {
        thereIsInitialValue = false;
        accumulator = this[0];
    }
    else {
        thereIsInitialValue = true;
        accumulator = initialValue;
    }

    if (thereIsInitialValue) {
        for (let i = 0; i < this.length; i++) {
            accumulator = callback(accumulator, this[i]);
        }
    }
    else {
        for (let i = 1; i < this.length; i++) {
            accumulator = callback(accumulator, this[i]);
        }
    }
    return accumulator;
}
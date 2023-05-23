"use strict";
exports.__esModule = true;
exports.getMaximunOfOne = void 0;
function getMaximunOfOne(numbers) {
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var elem = numbers_1[_i];
        if (elem !== 0 && elem !== "0" && elem !== 1 && elem !== "1") {
            return -1;
        }
    }
    var counter1 = 0;
    var counter2 = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1 || numbers[i] === "1") {
            counter2++;
            if (i === numbers.length - 1) {
                counter1 = counter2;
            }
        }
        else if (counter2 > counter1) {
            counter1 = counter2;
            counter2 = 0;
        }
    }
    return counter1;
}
exports.getMaximunOfOne = getMaximunOfOne;
console.log(getMaximunOfOne([0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1]));

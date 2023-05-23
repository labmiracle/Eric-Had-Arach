export function getMaximunOfOne(numbers: (number | string)[]): number {
    for (const elem of numbers) {
        if (elem !== 0 && elem !== "0" && elem !== 1 && elem !== "1") {
            return -1;
        }
    }
    let counter1 = 0;
    let counter2 = 0;
    for (let i = 0; i < numbers.length; i++) {
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
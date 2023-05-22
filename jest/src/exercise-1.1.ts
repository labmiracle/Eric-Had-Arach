export function fizzBuzz(num: number): string | number {
    if (typeof num !== "number") {
        return "You must enter a string";
    }
    if (num === 0) {
        return num;
    }
    else if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    }
    else if (num % 3 === 0) {
        return "Fizz";
    }
    else if (num % 5 === 0) {
        return "Buzz";
    }
    else {
        return num;
    }
}
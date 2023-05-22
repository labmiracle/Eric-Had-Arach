import { fizzBuzz } from "../exercise-1.1";

describe("Exercise 1.1", () => {
    test("is divisible by 3", () => {
        expect(fizzBuzz(3)).toBe("Fizz");
        expect(fizzBuzz(6)).toBe("Fizz");
    });
    test("is divisible by 5", () => {
        expect(fizzBuzz(5)).toBe("Buzz");
        expect(fizzBuzz(10)).toBe("Buzz");
    });
    test("is divisible by 3 and 5", () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
    test("no 0 was entered", () => {
        expect(fizzBuzz(0)).toBe(0);
    })
});
// falta el supuesto de que se pase un string
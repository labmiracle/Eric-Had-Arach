import { fizzBuzz } from "../exercise-1.1";
import { isLeapYear } from "../exercise-1.2";

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

describe("Exercise 1.2", () => {
    test("is leap year", () => {
        expect(isLeapYear(2012)).toBe(true);
        expect(isLeapYear(2016)).toBe(true);
        expect(isLeapYear(2020)).toBe(true);
    });
    test("isn't leap year", () => {
        expect(isLeapYear(2013)).not.toBe(true);
        expect(isLeapYear(2014)).not.toBe(true);
        expect(isLeapYear(2015)).not.toBe(true);
    });
});


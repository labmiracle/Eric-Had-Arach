import { fizzBuzz } from "../exercise-1.1";
import { isLeapYear } from "../exercise-1.2";
import { getADN } from "../exercise-1.3";
import { sumNumbers } from "../exercise-1.4";
import { getRepeated } from "../exercise-1.5";
import { getMaximunOfOne } from "../exercise-1.6";
import { lookup } from "../exercise-1.7";
import { setPrice, addToCart } from "../exercise-1.8";

// Test exercise 1.1
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

// Test exercise 1.2
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

// Test exercise 1.3
describe("Exercise 1.3", () => {
    test("empty string", () => {
        expect(getADN("")).toBe("");
    });
    test("test", () => {
        expect(getADN("CTAGGGTA")).toBe("CTAG");
    });
});

// Test exercise 1.4
describe("Exercise 1.4", () => {
    test("empty array", () => {
        expect(sumNumbers([])).toBe(0);
    });
    test("tests", () => {
        expect(sumNumbers([1,2,3,4])).toBe(10);
        expect(sumNumbers([1,-2,-3,5])).toBe(6);
        expect(sumNumbers([1,"2",3,4])).toBe(10);
        expect(sumNumbers([1,"-2",3,4])).toBe(8);
        expect(sumNumbers([1,"asd",3,4])).toBe(8);
    });
});

// Test exercise 1.5
describe("Exercise 1.5", () => {
    test("consecutive letters that do not repeat", () => {
        expect(getRepeated("abc de hj")).toBe(-1);
        expect(getRepeated("abab abab")).toBe(-1);
    });
    test("consecutive letters that repeat", () => {
        expect(getRepeated("abcdee")).toBe(4);
    });
});

// Test exercise 1.6
describe("Exercise 1.6", () => {
    test("value other than 0 or 1", () => {
        expect(getMaximunOfOne([0,1,2])).toBe(-1);
        expect(getMaximunOfOne([0,1,1,"2"])).toBe(-1);
    });
    test("only numbers", () => {
        expect(getMaximunOfOne([0,0,1,1,0,1,1,1,1])).toBe(4);
        expect(getMaximunOfOne([1,1,0,0,1,1,1])).toBe(3);
    });
    test("numbers and strings", () => {
        expect(getMaximunOfOne([0,0,1,1,0,1,"1",1,"1"])).toBe(4);
        expect(getMaximunOfOne([1,"1",0,0,1,"1",1])).toBe(3);
    });
});

// Tests exercise 1.7
describe("Exercise 1.7", () => {
    it("lookup(<login>, 'likes') should return likes for the specified user.", () => {
        const actual = lookup('norvig', 'likes');
        const expected = ['AI', 'Search', 'NASA', 'Mars'];
        expect(actual).toEqual(expected); 
    });
    it("lookup(<login>, 'lastName') should return the last name for the specified user", () => {
        const actual = lookup('knuth', 'lastName');
        const expected = 'Knuth';
        expect(actual).toEqual(expected);
    });
    it('with unknown user should throw an error with the correct message', () => {
        expect(() => {
            lookup('nobody', 'likes');
        }).toThrow(/Could not find user/);
    });
    it('with unknown property should throw an error the correct message', () => {
        expect(() => {
            lookup('mfowler', 'noprop');
        }).toThrow(/Could not find property/);
    });
});

// Test exercise 1.8
describe("Exercise 1.8, setPrice()", () => {
    it('should set the price in the given item object, immutably.', () => {
        const item = {
            name: 'test',
            price: 30,
        };
        const copy = Object.assign({}, item);
        
        const actual = setPrice(item, 50);
        const expected = {
            name: 'test',
            price: 50, };
        
        expect(actual).toEqual(expected);
        expect(item).toEqual(copy);
    });
});

describe("Exercise 1.8, addToCart()", () => {
    it('should add item to cart, immutably', () => {
        const originalCart : object[] = [];
        const item = {
            name: 'Toy',
            price: 30,
        };
        const copy = originalCart.slice();
        
        const actual = addToCart(originalCart, item);
        const expected = [item];
        
        expect(actual).toEqual(expected);
        expect(originalCart).toEqual(copy);
    });
});


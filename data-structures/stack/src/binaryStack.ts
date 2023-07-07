import Stack from "./stack";

export default class BinaryStack extends Stack<number | string> {
    constructor() {
        super();
    }

    push(num: number) {  // receives decimal number
        let binary: string[] = [];
        let residue: number;
        while (num !== 0) {
            residue = num % 2;
            num = Math.floor(num / 2);
            binary.push(residue.toString());
        }
        binary = binary.reverse();
        this.values.push(binary.join(""));
    }
}
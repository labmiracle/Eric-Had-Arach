import Stack from "./stack";

export default class OtherStack extends Stack<number | string> {
    basis: number;
    
    constructor(basis: number) {
        super();
        this.basis = basis;
    }

    push(num: number) {
        let binary: string[] = [];
        let residue: number;
        while (num !== 0) {
            residue = num % this.basis;
            num = Math.floor(num / this.basis);
            binary.push(residue.toString());
        }
        binary = binary.reverse();
        this.values.push(binary.join(""));
    }
}
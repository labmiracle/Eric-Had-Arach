export function getADN(cad: string): string {
    if (cad.length === 0) {
        return "";
    }
    const canonicalValues : Record<string, string> = {
        C: "C",
        T: "T",
        A: "A",
        G: "G"
    };
    let newString = "";
    for (const char of cad) {
        if (char in canonicalValues) {
            newString += char;
            delete canonicalValues[char];
        }
    }
    return newString;
}
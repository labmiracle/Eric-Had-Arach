export function getRepeated(cad: string): number {
    const lowercaseString = cad.toLowerCase();
    for (let i = 0; i < lowercaseString.length; i++) {
        if (/[a-z]/.test(lowercaseString[i]) && lowercaseString[i] === lowercaseString[i+1]) {  
            return i;
        }
    }
    return -1;

}
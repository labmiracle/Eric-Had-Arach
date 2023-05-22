export function sumNumbers(values: any[]): number {  // puse "any" a propósito para que pueda recibir cualquier tipo de valor dentro del array
    if (values.length === 0) {
        return 0;
    }
    let result = 0;
    for (let i=0; i < values.length; i++) {
        if (typeof values[i] !== "number") {
            if (Number(values[i])) {
                const value = Number(values[i]);
                if (value > 0) {
                    result += value;
                    continue;
                }

            }
        }
        if (values[i] > 0) {
            result += values[i];
        }
    }
    return result;
}
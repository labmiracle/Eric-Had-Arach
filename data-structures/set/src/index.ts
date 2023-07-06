//Exercise 1
function areThereRepeats<T>(values: T[]): boolean {
    return (values.length === new Set(values).size) ? false : true;
}


//Exercise 2
function getUniqueItems(arr1: number[], arr2: number[]): number[] {
    const nonRepeatedValues = new Set([...arr1, ...arr2]);
    return Array.from(nonRepeatedValues);
}
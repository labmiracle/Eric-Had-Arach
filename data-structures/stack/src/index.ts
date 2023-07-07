import Stack from "./stack";
import BinaryStack from "./binaryStack";
import OtherStack from "./otherStack";

console.log("STACK");
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
stack.pop();
stack.print();

console.log("BINARY STACK");
const binaryStack = new BinaryStack();
binaryStack.push(3);
binaryStack.push(4);
binaryStack.push(5);
binaryStack.push(6);
binaryStack.print();

console.log("OTHER STACK");
const otherStack = new OtherStack(8);
otherStack.push(3);
otherStack.push(4);
otherStack.push(5);
otherStack.push(6);
otherStack.print();



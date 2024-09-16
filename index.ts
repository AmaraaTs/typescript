console.log("Hello typescript");

const num: number = 20;
const str: string = "Hello";
const isBool: Boolean = true;

console.log("Num value", num);
console.log("Str value", str);
console.log("Boolean value", isBool);

function add(a: number, b: number): number {
  return a + b;
}

const y = add(3, 9);

console.log("Add", y);

const add2 = (a: number, b: number): number => {
  return a + b;
};

const myPrint = (text: string): void => {
  console.log("Hello ", text);
};

const s = add2(200, 500);
myPrint("Apple");

// Typescript =>

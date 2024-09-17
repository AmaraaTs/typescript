"use strict";
console.log("Hello typescript");
const num = 20;
const str = "Hello";
const isBool = true;
console.log("Num value", num);
console.log("Str value", str);
console.log("Boolean value", isBool);
function add(a, b) {
    return a + b;
}
const y = add(3, 9);
console.log("Add", y);
const add2 = (a, b) => {
    return a + b;
};
const myPrint = (text) => {
    console.log("Hello ", text);
};
const s = add2(200, 500);
myPrint("Apple");
const p1 = {
    name: "Naraa",
    age: 20,
    gender: "er",
};
const arr = ["Hello", 4];
console.log(p1);
console.log(arr);
const t = {
    name: "Uka",
    age: 22,
    gender: "er",
    lesson: "JS",
};
// Object Oreinted Programming = OOP => Prototype inheritance
class Person {
    constructor(name) {
        this.name = "";
        this.age = 0;
        this.regNum = "";
        this.name = name;
    } //Person()
    walk() {
        console.log("1 step");
    }
    getRegNum() {
        return this.regNum;
    }
}
class Teacher extends Person {
    constructor(name) {
        super(name);
        this.lesson = "";
    }
    //override
    walk() {
        console.log("2 steps");
    }
}
const p9 = new Person("Naraa"); //instance
const p8 = new Person("Saraa"); //instance
const t8 = new Teacher("Uka"); //instance
p9.name;
p9.walk();
p8.name = "Darmaa";
t8.walk();

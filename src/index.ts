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

// Union type
type GenderType = "er" | "em";
type StringOrNumber = string | number;

interface IPerson {
  name: string;
  age: number;
  gender: GenderType;
  hairColor?: string;
}

type PersonType =
  | {
      name: string;
      age: number;
      gender: GenderType;
      hairColor?: string;
    }
  | string;

const p1: IPerson = {
  name: "Naraa",
  age: 20,
  gender: "er",
};

type myArray = (string | number)[];

const arr: myArray = ["Hello", 4];

console.log(p1);
console.log(arr);

interface ISuperman {
  name: string;
  age: number;
  gender: GenderType;
}

interface ITeacher extends ISuperman {
  lesson: string;
}

interface IStudent extends ISuperman {
  gpa: number;
}

const t: ITeacher = {
  name: "Uka",
  age: 22,
  gender: "er",
  lesson: "JS",
};

// Object Oreinted Programming = OOP => Prototype inheritance

class Person {
  public name: string = "";
  public age: number = 0;
  private regNum: string = "";

  constructor(name: string) {
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
  public lesson = "";

  constructor(name: string) {
    super(name);
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

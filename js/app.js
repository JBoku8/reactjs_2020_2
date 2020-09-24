import MainFuncton, { PAGE_TITLE as pageTitle, LIMIT } from "./constants";
import { COMMON, HELPER } from "./utils";

var name = "John Doe";

// var function scoped
// function print() {
//   var name = "Print Function";
//   console.log(name);
// }

// if (true) {
//   var name = "IF Section";
//   console.log(name);
// }
// var name = "IF Section";
// console.log(name);

// print();
// console.log(name);

// let/const block scoped

// let userName = "SuperMan";

// function callSuperMan() {
//   const userName = "BatMan";
//   console.log(userName);
// }

// if (true) {
//   const userName = "If SpiderMan";
//   console.log(userName);
// }

// callSuperMan();
// console.log(userName);

// sayHello();
function sayHello() {
  console.log("SayHello Function");
}

const sayHi = function () {
  console.log("SayHi Function");
};
// sayHi();

const saySomething = () => {
  console.log("saySomething Function");
};
// saySomething();

const list = [1, 2, 3, 4, 5];

// const newList = list.map(function (item) {
//   return item ** 3;
// });

const newList = list.map((item) => item ** 3);

// console.log(newList);

const tasks = ["learn js", "learn react", "learn fn javascript"];
const [task1, task2, task3] = tasks;
// console.log(task1, task2, task3);
// console.log(tasks[0], tasks[1], tasks[2]);

const apiData = {
  name: "ES6 - ESNEXT",
  websites: {
    react: "https://reactjs.org",
  },
};

const { name: apiName = "Default Name", websites, baseURL = null } = apiData;
const { react } = apiData.websites;
// console.log(websites, apiName, baseURL);

function sum(a = 0, b = 0, ...rest) {
  return rest.reduce((prev, curr) => {
    if (typeof curr === "object") return (prev += curr.value);
    return (prev += curr);
  }, a + b);
}
// console.log(sum(9, 8, 3, 3, { value: 200 }, { value: 100 }));
// console.log(...tasks);
const newArr = [...newList, 143];
// console.log(newArr);

const config = {
  //   userName: "superman",
  password: "adadadad",
  key: "swsevwev",
  secure: true,
};

const init = (options) => {
  const { userName: user = "admin", password, key, secure } = options;
  console.log(user);
};

// init(config);

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  printInfo() {
    console.log(this.name);
  }
}

const user_1 = new Person("User 1", 43, "MALE");
const user_0 = new Person("User 0", 34, "FEMALE");

console.log(user_0.gender);
console.log(user_1.gender);
user_0.printInfo();

document.title = pageTitle;
document.getElementById("root").innerText = MainFuncton();

console.log(COMMON, HELPER);

// import varName from "path"
// const varName = require("path")
const { name, age, isAdmin } = require("./primitives.js");
const { userDetails, subjects, displayMessage } = require("./nonprimitives.js");
console.log("-----PRIMITIVES------");
console.log(name);
console.log(age);
console.log(isAdmin);

console.log("------NON PRIMITIVES-------");
console.log(userDetails);
console.log(subjects.map((subject) => subject.length));
displayMessage("Welcome");

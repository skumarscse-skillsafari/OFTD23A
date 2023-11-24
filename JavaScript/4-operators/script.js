// Logical Operators
// AND => &&
// OR => ||
// NOT => !

// AND => Binary operator
// 2 operands
// 2 > 3 => false
// 12 < 11 => false
// 2 > 3 && 12 < 11
// true && true => true
// true && false => false
// false && trur => false
// false && false => false

// console.log(12 > 10 && 1 > 0); // true && true => true
// console.log(12 > 10 && 1 < 0); // true && false => false
// console.log(12 > 20 && 1 > 0); // false && true => false
// console.log(12 > 20 && 1 == 0); // false && false => false

// Checks for first "falsy" value and return that operand actual value
// If none of the operand turns "false", return last operand actual value

// console.log(1 && "Hello" && 0 && true); // 0
// console.log(1 && "Hello" && false && true); // false
// console.log(1 && "Hello" && null && true); // null
// console.log(1 && "Hello" && undefined && true); // undefined
// console.log(1 && "Hello" && "" && true); //
// console.log(1 && "Hello" && " " && true); // true
// console.log(1 && "Hello" && " " && false); // false

// Short-circuiting
// if first operand "false", return first operand actual value
// if first operand "true", return second opeand actual value
// let username = prompt("Enter your name");
// console.log(username && "Anonymous user");

// OR => "||" => Binary operator
// operand-1 ||  operand-2  result
// true      || true        true
// true      || false       true
// false     || true        true
// false     || false       false

// Check for first "truthy" value and return than operand actual value
// If none of the operand turns "true", return last operand actual value

// console.log(0 || "" || true || "Hello"); // true
// console.log(0 || " " || null || "Hello"); //
// console.log(0 || "" || false || "Hello"); // Hello
// console.log(0 || "" || null || false); // false

// Short-circuiting
// operand-1 "true", return operand-1 actual value
// operand-1 "false", return operand-2 actual value

// let username = +prompt("Enter user name");
// let username = prompt("Enter user name");
// console.log(username || "Anonymous user");

// NOT => ! => unary operator
// true => false
// false => true
// console.log(!false);
// console.log(!"Hello");
// console.log(!"");
// console.log(!!" ");

// Nullish coalesing operator (??) => Used to check if the variable is defined with a value or not
// if operand-1 defined, return operand-1 actual value
// if operand-1 is not defined, return opernad-2 actual value
// Syntax
// operand-1 ?? operand-2
let username = "John";
console.log(username ?? "Guest user");

let num = 0;
console.log(num || "Hello"); // Hello
console.log(num ?? "Hello"); // 0

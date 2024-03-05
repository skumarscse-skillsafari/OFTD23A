console.log("Hello");

setTimeout(() => {
  console.log("SetTimeout");
}, 0);

console.log("Third request");

setInterval(() => {
  console.log("SetInterval");
}, 1000);

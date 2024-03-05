const fs = require("fs");
// Read
// readFileSync()
const contentOne = fs.readFileSync("./content-1.txt", { encoding: "utf-8" });
console.log(contentOne);
const contentTwo = fs.readFileSync("./content-2.txt", { encoding: "utf-8" });
console.log(contentTwo);
fs.writeFileSync(
  "./output/write.txt",
  `OUTPUT: ${contentOne} ${contentTwo}\n`,
  {
    flag: "a",
  }
);

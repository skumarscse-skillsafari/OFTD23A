const fs = require("fs");

fs.readFile("./content-1.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) return;
  const contentOne = data;
  console.log(contentOne);
  fs.readFile("./content-2.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) return;
    const contentTwo = data;
    console.log(contentTwo);
    fs.writeFile(
      "./output/write.txt",
      `OUTPUT: ${contentOne} ${contentTwo}\n`,
      { flag: "a" },
      (err) => {
        if (err) return;
        console.log("File written successfully");
      }
    );
  });
});

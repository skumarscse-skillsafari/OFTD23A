const http = require("http");
const fs = require("fs");

const indexPage = fs.readFileSync("./Course-Website/index.html", {
  encoding: "utf-8",
});
const cssPage = fs.readFileSync("./Course-Website/css/style.css", {
  encoding: "utf-8",
});
const jsPage = fs.readFileSync("./Course-Website/js/index.js", {
  encoding: "utf-8",
});
const headerImg = fs.readFileSync("./Course-Website/images/header-shape.svg", {
  encoding: "utf-8",
});

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write(indexPage);
    res.end();
  } else if (req.url === "/css/style.css") {
    res.writeHead(200, {
      "Content-Type": "text/css",
    });
    res.write(cssPage);
    res.end();
  } else if (req.url === "/js/index.js") {
    res.writeHead(200, {
      "Content-Type": "text/javascript",
    });
    res.write(jsPage);
    res.end();
  } else if (req.url === "/images/header-shape.svg") {
    res.writeHead(200, {
      "Content-Type": "image/svg+xml",
    });
    res.write(headerImg);
    res.end();
  } else {
    res.write(`
    <h1>Something went wrong</h1>
    <a href="/">Back to home page</a>
    `);
    res.end();
  }
});

server.listen(5000, () =>
  console.log("Server is running in: http://localhost:5000")
);

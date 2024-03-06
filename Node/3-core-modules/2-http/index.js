const http = require("http");

const app = http.createServer((req, res) => {
  //   console.log(req);
  if (req.url === "/") {
    res.write("<h1>Welcome to Node.js</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.write("<h1>Welcome to About page</h1>");
    res.end();
  } else if (req.url === "/contact") {
    res.write("<h1>Welcome to Contact page</h1>");
    res.end();
  } else {
    res.write(`
    <h1>Something went wrong</h1>
    <a href="/">Back to home page</a>
    `);
    res.end();
  }
});

app.listen(5000, () => {
  console.log("Server is running in: http://localhost:5000");
});

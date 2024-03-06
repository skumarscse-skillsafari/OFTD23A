import express from "express";

const app = express();
app.use(express.static("./Course-Website"));
// Routes
// Req => http://localhost:5000
// Res => <h1>Welcome to Express.js</h1>
// httpMethods => get, post, put, patch, delete
// app.httpMethod("reqURL", (req, res) => {...})
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Express.js</h1>");
});

// app.get("/about", (req, res) => {
//   res.status(200).send("<h1>Welcome to About page</h1>");
// });

// app.get("/contact", (req, res) => {
//   res.status(200).send("<h1>Welcome to Contact page</h1>");
// });

// app.get("*", (req, res) => {
//   res.status(404).send(`
//     <h1>Something went wrong</h1>
//     <a href="/">Back to home page</a>
//     `);
// });

app.listen(5000, () =>
  console.log("Server is running in: http://localhost:5000")
);

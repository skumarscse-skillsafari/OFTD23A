import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "./models/userModel.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const DB_CONNECTION_URL = process.env.DB_CONNECTION_URL;

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Welcome to Blog App" });
});

// Signup
// http://localhost:5000/api/v1/users/signup
app.post("/api/v1/users/signup", async (req, res) => {
  try {
    // const { username, email } = req.body;
    const encryptedPwd = await bcrypt.hash(req.body.password, 12);
    // const newUserObj = {
    //   username: username,
    //   email: email,
    //   password: encryptedPwd,
    //   confirmPassword: encryptedPwd,
    // };
    // const user = await User.create(newUserObj); // {username:, email:, password: , confirmPassword: }
    const user = await User.create({
      ...req.body,
      password: encryptedPwd,
      confirmPassword: encryptedPwd,
    }); // {username:, email:, password: , confirmPassword: }
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: error });
  }
});

mongoose
  .connect(DB_CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is running in: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(error));

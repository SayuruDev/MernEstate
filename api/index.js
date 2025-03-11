import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";

const app = express();
mongoose.connect(
  "mongodb+srv://sagara:sagara123@cluster0.blx4tkl.mongodb.net/mern-estate?retryWrites=true&w=majority&appName=Cluster0"
);

app.listen(3000, () => {
  console.log("server is runing on port 3000");
});

app.use("/api/user", userRouter);

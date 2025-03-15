import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();
app.use(express.json());
mongoose.connect(
  "mongodb+srv://sagara:sagara123@cluster0.blx4tkl.mongodb.net/mern-estate?retryWrites=true&w=majority&appName=Cluster0"
);

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("server is runing on port 3000**!!!");
});

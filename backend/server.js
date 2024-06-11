import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import dotenv from "dotenv";
import { DBConnect } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// app config
const app = express();
const port = 3000 || process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

//Db connection
DBConnect();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.listen(port, () => {
  console.log(`Server started on Port ${port}`);
});
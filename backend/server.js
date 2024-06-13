import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import 'dotenv/config'
import { DBConnect } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

// app config
const app = express();
const port = 3000 || process.env.PORT;

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    methods: ["GET", "POST"],
  })
);

//Db connection
DBConnect();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter )
app.use("/api/order",orderRouter )

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.listen(port, () => {
  console.log(`Server started on Port ${port}`);
});

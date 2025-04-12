import express from "express";
import dotenv from "dotenv";
import weatherRouter from "./routers/weather.route.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api/weather", weatherRouter);

app.listen(PORT, ()=>{
    console.log("Server is listening");
})

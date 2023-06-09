import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyparser.json({ limit: "300mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "300mb", extended: true }));
app.use(cors());

// const CONNECTION =
//   "mongodb+srv://asirisac12:IiT0776650243@cluster0.dyhtluu.mongodb.net/?retryWrites=true&w=majority";
// const PORT = process.env.PORT 
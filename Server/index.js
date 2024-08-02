import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

connectDB();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Router);

app.listen(PORT, () => {
  console.log(`Server is started on http://localhost:${PORT}`);
});

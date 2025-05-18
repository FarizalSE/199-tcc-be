import express from "express";
import cors from "cors";
import NotesRoute from "./routes/NotesRoute.js";
import UserRoute from "./routes/UserRoute.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();
app.set("view engine","ejs");

dotenv.config();

app.use(cookieParser());
app.use(cors());
app.get("/", (req, res) => res.render("index"));
app.use(express.json());
app.use(NotesRoute, UserRoute);

app.listen(5000, () => console.log("Server connected"));

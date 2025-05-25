import express from "express";
import cors from "cors";
import NotesRoute from "./routes/NotesRoute.js";
import UserRoute from "./routes/UserRoute.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.set("view engine","ejs");

const corsOptions = {
    origin : [
        "https://c-05-451109.ue.r.appspot.com",
        "http://localhost:3000"
    ],
    credentials : true,
    methods : ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders : ["Content-Type", "Authorization"],
};

app.use(cookieParser());
app.use(cors());
app.options("*", cors(corsOptions));
app.get("/"), (req, res) => res.render("index");
app.use(express.json());
app.use(NotesRoute, UserRoute);

app.listen(port, () => console.log(`Server connected ${port}`));

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//request accept practice

app.use(express.json({ limit: "25kb" })); //return object builtin middleware
app.use(express.urlencoded({ extended: true, limit: "25kb" }));
app.use(express.static("public"));
app.use(cookieParser()); //cookie stored at client side

export { app };

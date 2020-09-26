import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Pusher from "pusher";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.status(200).send("hello world"));

app.listen(port, () => console.log(`listening on localhost:${port}`));
 
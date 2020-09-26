import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Pusher from "pusher";

//app config
const app = express();
const port = process.env.PORT || 8080;

//app middlewares
app.use(express.json());
app.use(cors());

//DB config
const connection_url =
  "mongodb+srv://admin:HnCK5VDesVC07hBG@cluster0.3ywzz.mongodb.net/netcineDB?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("DB connected");
});
//API routes
app.get("/", (req, res) => res.status(200).send("hello world"));
app.post("/upload", (req, res) => {
    
});

//listen
app.listen(port, () => console.log(`listening on localhost:${port}`));

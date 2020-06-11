import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import "dotenv/config"
import cors from "cors";
import connectdb from "./db"
import route from './routes'


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

connectdb()
const port = process.env.PORT || 3000

route(app);

app.listen(port);

console.log("server started")

export default app;

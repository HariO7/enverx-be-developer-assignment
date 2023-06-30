import express, { Express } from "express";
import dotenv from "dotenv";
import router from "./routes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL as string;

try {
  mongoose.connect(MONGO_URL).then(() => {
    console.log("mongo connection successful");
  });
} catch (error) {
  console.log("Error connection with mongo", error);
}
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//routes
app.use(router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

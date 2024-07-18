import express from "express";
import dotenv from "dotenv";

// import bodyParser from "body-parser";
import routes from "./src/routes";

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

dotenv.config();
app.use("/api", routes);

export default app;

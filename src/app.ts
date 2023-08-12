import "express-async-errors";
import express, { Application, json } from "express";
import "dotenv/config";
import { developerRouter, projectRouter } from "./routers";
import { handleErrors } from "./middlewares";

const app: Application = express();
app.use(json());

app.use("/developers", developerRouter);
app.use("/projects", projectRouter);

app.use(handleErrors);

export default app;

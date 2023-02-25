import express, { json } from "express";
import { router } from "./routes";

const app = express();

const port = process.env.port || 3000;

app.use(json());
app.use(router);

app.listen(port, () => console.log(`Server listening on port ${port}`));

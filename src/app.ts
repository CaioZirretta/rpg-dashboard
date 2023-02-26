import express, { json } from "express";
import { router } from "./routes";

const app = express();

const port = 3000 || process.env.port;

app.use(json());

router(app);

app.listen(port, () => console.log(`Server listening on port ${port}`));

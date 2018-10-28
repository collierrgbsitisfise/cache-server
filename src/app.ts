import * as express from "express";
import * as bodyParser from "body-parser";
import { PingRoutes, CacheRoutes } from "./routes";

const app: express.Application = express();

const port: number = +process.env.PORT || 7777;

app.use(bodyParser.json());

app.use("/ping", PingRoutes);
app.use("/cache", CacheRoutes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});

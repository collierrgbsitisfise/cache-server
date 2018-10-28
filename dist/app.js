"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes");
const app = express();
const port = +process.env.PORT || 7777;
app.use(bodyParser.json());
app.use("/ping", routes_1.PingRoutes);
app.use("/cache", routes_1.CacheRoutes);
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
//# sourceMappingURL=app.js.map
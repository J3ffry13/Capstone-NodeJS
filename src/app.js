import express from "express";
import cors from "cors";

const bodyParser    = require('body-parser');
import productRoutes from "./routes/products.routes";
import morgan from "morgan";

import config from "./config";

var { expressjwt: expressJWT } = require("express-jwt");

const app = express();

const secret = 'Hola4@dsf'

// settings
app.set("port", config.port);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(express.json());

app.use(expressJWT({ secret: secret ,
    algorithms: ["HS256"],}).unless({ path: ["/api/login"] }));

// Routes 
app.use("/api", productRoutes);

export default app;

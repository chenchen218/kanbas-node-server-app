// import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import express from "express";
const app = express();
app.use(cors());
// app.use(express.json());
Lab5(app);
// Hello(app);
// app.use(express.json());
app.listen(4000);
//aaaa

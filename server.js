const express = require("express");
const app = express();
const mongodb = require("./db/database");
const path = require("path");

const cors = require("cors");
app.use(cors());
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/std/", require("./routes/router"));

app.listen(PORT, () => console.log("server running on port: " + PORT));

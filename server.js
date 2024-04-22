// express web server
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Amber Davis");
});

const port = 3500;

app.listen(process.env.port || port);
console.log("Web Server is listening at port " + (process.env.port || port));

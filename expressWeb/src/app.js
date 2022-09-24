const express = require("express");
const path = require("path");
const app = express();

const PORT = 5000;

// ****PUBLIC state path*****

const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path));

// *****Routing*****

app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.get("/about", (req, res) => {
  res.send("welcome to about page");
});

app.get("/weather", (req, res) => {
  res.send("welcome to weather page");
});

app.get("*", (req, res) => {
  res.send("404 error page ");
});

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});

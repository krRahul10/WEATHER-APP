const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

const PORT = process.env.PORT || 5000;

// ****PUBLIC state path*****

const static_path = path.join(__dirname, "../public");
// console.log(path.join(__dirname,"../templates"))
const templatePath = path.join(__dirname, "../templates");
const partialPath = path.join(__dirname, "../templates/partials");
// app.use(express.static(path.join(__dirname, "../public/css")));
app.use(express.static('public'))

// app to btatna padega ki ab hum view engine ka code use kar rhe h

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);
// app.use(express.static(static_path));

// *****Routing*****

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});

app.get("*", (req, res) => {
  res.render("404error");
});

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});

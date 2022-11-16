const express = require("express");
const app = express();

// this is the root or home page
app.get("/", function (req, res) {
  res.send("<h3>Hello World</h3>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at rp@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("Hi, I am a Full Stack Developer");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

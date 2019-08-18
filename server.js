const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

var Twit = require("twit");

var port = process.env.PORT || 4000;

var T = new Twit({
  consumer_key: "phV8qPJ8jY4heARo3rbJOgl2C",
  consumer_secret: "cJXiuqXS7hZGQ3esPuET9s5ABZmpfqTtz9BaHrQc0KsLzXNB9X",
  access_token: "770000167508516867-DJCBtkXShPn9g41azOEAjc4kCYMq9tl",
  access_token_secret: "bmnbqh4xHiPNZPopZbDCnaB6D4gUJqzeEy56gl7bjdllg"
});

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  T.get("users/search", { Name: " ", q: req.query.q }, (err, data) => {
    res.send(data);
  });
});

app.get("/user", (req, res) => {
  T.get("users/lookup", { screen_name: req.query.screen_name }, (err, data) => {
    res.send(data);
  });
});

//Serve in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});

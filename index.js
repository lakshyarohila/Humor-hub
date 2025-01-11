require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const jokes = require("./joke.js");
const jokesHn = require("./jokeHn.js");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

try {
  app.get("/api/v1/random-jokes", (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const joke = jokes[randomIndex];
    res.json({ joke });
  });
} catch (error) {
  console.log(error, "Message Error");
}

try {
  app.get("/api/v1/random-jokes-Hn", (req, res) => {
    const randomIndex1 = Math.floor(Math.random() * jokesHn.length);
    const jokesHindi = jokesHn[randomIndex1];
    res.json({ jokesHindi });
  });
} catch (error) {
  console.log("Error", error.message);
}

app.listen(PORT, () => {
  console.log(`Server Running On ${PORT}...`);
});

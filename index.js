const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");
const news = require("./data/news.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Dragon is running here");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});

// --------------get all news----------
app.get("/news", (req, res) => 
{
  res.send(news);
});

// -------Get specific news for any id--------

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((newsId) => newsId._id === id);
  res.send(selectedNews);
});

// ---------get all date for any specific category-------------

app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (id === 0)
   {
    res.send(news);
  } else 
  {
    const categoryNews = news.filter((newId) => parseInt(newId.category_id) === id);
    res.send(categoryNews);
  }
});

app.listen(port, () => {
  console.log(`Dragon API is running not on ${port}`);
});

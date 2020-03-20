// ZAD8 Podzielmy odpowiednio naszą aplikację z zadania 7 wykorzystując express.Router(https://expressjs.com/en/4x/api.html#router)

const express = require("express");
const router = express.Router();

const posts = [
  {
    userId: 0,
    title: "Janko",
    body: "jan@nowak.abc"
  }
];

router.get("/add", (req, res) => {
  posts.push(req.query);
  console.log(posts);
  res.send("dodano post");
});
router.get("/list/:id?", (req, res) => {
  const { id } = req.params;
  if (id) {
    res.send(posts[id]);
  } else {
    res.send(posts);
  }
});
router.get("/delete/:id", (req, res) => {
  const { id } = req.params;
  posts.splice(id, 1);
  res.send(posts);
});

module.exports = router;

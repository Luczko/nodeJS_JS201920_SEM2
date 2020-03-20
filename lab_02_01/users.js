// ZAD8 Podzielmy odpowiednio naszą aplikację z zadania 7 wykorzystując express.Router(https://expressjs.com/en/4x/api.html#router)

const express = require("express");
const router = express.Router();

const users = [
  {
    name: "Jan",
    username: "Janko",
    email: "jan@nowak.abc"
  }
];

router.get("/add", (req, res) => {
  users.push(req.query);
  console.log(users);
  res.send("dodano uzytkownika");
});
router.get("/list/:id?", (req, res) => {
  const { id } = req.params;
  if (id) {
    res.send(users[id]);
  } else {
    res.send(users);
  }
});
router.get("/delete/:id", (req, res) => {
  const { id } = req.params;
  users.splice(id, 1);
  res.send(users);
});

module.exports = router;

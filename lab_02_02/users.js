const express = require("express");
const router = express.Router();

let counter = 0;
let users = [
  {
    id: counter++,
    user: "Rav"
  }
];

// http://localhost:4500/users
router.get("/", (req, res) => {
  res.send(users);
});

// http://localhost:4500/users
router.post("/", (req, res) => {
  const { user } = req.body;
  if (!user) {
    res.sendStatus(400);
  } else {
    const newUser = { id: counter++, user };
    users.push(newUser);
    res.sendStatus(201);
  }
});

// http://localhost:4500/users/1
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const lengthBeforeFilter = users.length;

  users = users.filter(q => q.id !== id);

  if (lengthBeforeFilter === users.length) {
    res.sendStatus(404);
  } else {
    res.sendStatus(200);
  }
});

// http://localhost:4500/users/1
// PUT: { "user": "Kami" }
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = users.find(q => q.id === id);
  if (item) {
    const { user } = req.body;

    if (!user) {
      res.sendStatus(400);
    } else {
      const newUser = { id, user };
      users = users.map(q => (q === item ? newUser : q));
      res.sendStatus(200);
    }
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;

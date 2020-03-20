const express = require("express");
const router = express.Router();

let counter = 0;
let tasks = [
  {
    id: counter++,
    task: "kot",
    done: false
  }
];

// http://localhost:4500/tasks
router.get("/", (req, res) => {
  res.send(tasks);
});

// http://localhost:4500/tasks/done
router.get("/done", (req, res) => {
  let done = tasks.filter(e => {
    return e.done === true;
  });
  if (done[0]) {
    res.send(done);
  } else {
    res.sendStatus(404);
  }
});

// http://localhost:4500/tasks/undone
router.get("/undone", (req, res) => {
  let undone = tasks.filter(e => {
    return e.done === false;
  });
  if (undone[0]) {
    res.send(undone);
  } else {
    res.sendStatus(404);
  }
});

// http://localhost:4500/tasks/10
// http://localhost:4500/tasks/2
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(q => q.id === id);

  if (task) {
    res.send(task);
  } else {
    res.sendStatus(404);
  }
});

// http://localhost:4500/tasks
// POST: { "task": "pojsc gdzies" }
router.post("/", (req, res) => {
  const { task } = req.body;
  if (!task) {
    res.sendStatus(400);
  } else {
    const newTask = { id: counter++, task, done: false };
    tasks.push(newTask);
    res.sendStatus(201);
  }
});

// http://localhost:4500/tasks/10
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const lengthBeforeFilter = tasks.length;

  tasks = tasks.filter(q => q.id !== id);

  if (lengthBeforeFilter === tasks.length) {
    res.sendStatus(404);
  } else {
    res.sendStatus(200);
  }
});

// http://localhost:4500/tasks/10
// PUT: { "task": "pojsc gdzie indziej" }
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = tasks.find(q => q.id === id);
  const done = item.done;
  if (item) {
    const { task } = req.body;

    if (!task) {
      res.sendStatus(400);
    } else {
      const newTask = { id, task, done };
      tasks = tasks.map(q => (q === item ? newTask : q));
      res.sendStatus(200);
    }
  } else {
    res.sendStatus(404);
  }
});

// http://localhost:4500/tasks/0
// PATCH: { "done": true }
router.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = tasks.find(q => q.id === id);
  const task = item.task;
  if (item) {
    const { done } = req.body;
    if (done) {
      const newTask = {
        id,
        task,
        done
      };
      tasks = tasks.map(q => (q === item ? newTask : q));
      res.sendStatus(201);
    } else {
      res.sendStatus(400);
    }
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;

const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let todos = [
  {
    id: nanoid(),
    title: 'todo 1',
    completed: true,
  },
  {
    id: nanoid(),
    title: 'todo 2',
    completed: false,
  },
  {
    id: nanoid(),
    title: 'todo 3',
    completed: false,
  },
  {
    id: nanoid(),
    title: 'todo 4',
    completed: false,
  },
  {
    id: nanoid(),
    title: 'todo 5',
    completed: false,
  },
];
let toggleValue = false;

app.get('/todos', (req, res) => res.send(todos));

app.post('/todos', (req, res) => {
  const todo = { title: req.body.title, id: nanoid(), completed: false };
  todos.push(todo);
  res.status(201);
  return res.send(todo);
});

app.post('/todos/:id', (req, res) => {
  todos.some(todo => {
    if(todo.id === req.body.id)
    return todo.title = req.body.title
  })
  res.send(todos)
})

app.post('/todos/toggleAll', (req, res) => {
  toggleValue = Boolean(req.body.itemsLeft)
  todos.map(todo => todo.completed = !toggleValue)
  toggleValue = !toggleValue
  res.send(toggleValue)
})

app.patch('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  const completed = Boolean(req.body.completed);
  if (index > -1) {
    todos[index].completed = completed;
  }
  return res.send(todos[index]);
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index > -1) {
    todos.splice(index, 1);
  }

  res.send(todos);
});

app.delete('/todos', (req, res) => {
  todos= todos.filter(todo => todo.completed === false)
  res.status(204);
  res.send(true);
})

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));
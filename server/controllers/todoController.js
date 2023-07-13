const Todo = require('../models/todo');

// Get all Todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll(); 
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Get a Todo by ID
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Create a Todo
exports.createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Update a Todo
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
      await todo.update(req.body);
      res.status(200).json(todo);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Delete a Todo
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
      await todo.destroy();
      res.status(200).send();
    } else {
      res.status(404).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

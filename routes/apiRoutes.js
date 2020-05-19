var db = require("../models");

module.exports = function (app) {
  // Get all todos
  app.get("/", function (req, res) {
    db.Todo.findAll({})
      .then(function (dbTodo) {
        var todoObject = {
          todos: dbTodo
        };
        res.render("index", todoObject);
      });
  });

  // Get a single Todo
  app.get("/api/todos/:id", function (req, res) {
    db.Todo.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbTodo) {
        res.json(dbTodo);
      });
  });

  // Get route for returning todos of a specific category
  app.get("/api/todos/category/:category", function (req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function (dbTodo) {
        res.json(dbTodo);
      });
  });

  // Create a new todo
  app.post("/api/todos", function (req, res) {
    db.Todo.create({
      title: req.body.title,
      category: req.body.category,
      ETC: req.body.ETC
    })
      .then(function (dbTodo) {
        res.redirect("/");
      });
  });

  // Delete a todo by id
  app.delete("/api/todos/:id", function (req, res) {
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (todoObject) {
        res.json(todoObject);
      });
  });

  // Update a Todo item
  app.put("/api/todos/:id", function (req, res) {
    db.Todo.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (todoObject) {
        res.json(todoObject);
      });
  });
};

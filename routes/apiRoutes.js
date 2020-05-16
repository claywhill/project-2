var db = require("../models");

module.exports = function(app) {
  // Get all todos
  app.get("/api/todos", function(req, res) {
    console.log("Get todos", req.body);
    db.Todo.findAll({})
    .then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

  // Get a single Todo
  app.get("/api/todos/:id", function(req, res) {
    db.Todo.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbTodo) {
        res.json(dbTodo);
      });
  });

  // Get route for returning todos of a specific category
  app.get("/api/totdos/category/:category", function(req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbTodo) {
        res.json(dbTodo);
      });
  });

  // Create a new todo
  app.post("/api/todos", function(req, res) {
    console.log("Post todos", req.body)
    db.Todo.create({
      title: req.body.title,
      category: req.body.category,
      ETC: req.body.ETC
    })
      .then(function(dbTodo) {
        res.json(dbTodo);
    });
  });

  // Delete an todo by id
  app.delete("/api/todos/:id", function(req, res) {
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbTodo) {
        res.json(dbTodo);
    });
  });

  // Update a Todo item
  app.put("/api/todos", function(req, res) {
    db.Todo.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
        .then(function(dbTodo) {
          res.json(dbTodo);
        });
  });
};

var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/todos", function(req, res) {
    db.Todo.findAll({}).then(function(dbTodo) {
      res.json(Todo);
    });
  });

  // Create a new example
  app.post("/api/Todo", function(req, res) {
    db.Todo.create(req.body).then(function(dbTodo) {
      res.json(Todo);
    });
  });

  // Delete an example by id
  app.delete("/api/todos/:id", function(req, res) {
    db.Todo.destroy({ where: { id: req.params.id } }).then(function(dbTodo) {
      res.json(Todo);
    });
  });
};

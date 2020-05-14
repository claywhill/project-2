var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Todo.findAll({}).then(function(dbTodo) {
      res.render("index", {
        title: dbTodo.title,
        category: dbTodo.category
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/todo/:id", function(req, res) {
    db.Todo.findOne({ where: { id: req.params.id } }).then(function(dbTodo) {
      res.render("todo", {
        todo: todo
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

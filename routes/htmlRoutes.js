var db = require("../models");

var path = require("path")

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

  // Load todo page and pass in a todo by id
  app.get("/todo/:id", function(req, res) {
    db.Todo.findOne({ where: { id: req.params.id } }).then(function(dbTodo) {
      res.render("todo", {
        todo: todo
      });
    });
  });

    // route loads travel.html
    app.get("/travel", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/travel.html"));
    });
  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

};

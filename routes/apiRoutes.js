var db = require("../models");

module.exports = function (app) {
  // Get all todos
  app.get("/", function (req, res) {
    db.Todo.findAll({})
      .then(function (dbTodo) {

        var todoObject = {
          todos: dbTodo
        };
        console.log(dbTodo);
               
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

  // Create a new todo
  app.post("/api/todos", function (req, res) {
    console.log("Post route activated")
    db.Todo.create({
      title: req.body.title,
      category: req.body.category,
      ETC: req.body.ETC,
      completed: req.body.completed
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
	app.put('/api/todos/:id', function(req, res) {
		console.log('Is there anybody out there?!');
		console.log(typeof req.body.completed);
		console.log(req.params.id);
		db.Todo.update(
			{ completed: req.body.completed === 'false' ? 1 : 0 },
			{
				where: {
					id: req.params.id,
				},
			}
		).then(function(todoObject) {
			res.json(todoObject);
      });
  });
};

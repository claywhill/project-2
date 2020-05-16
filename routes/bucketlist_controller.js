var express = require("express");

var router = express.Router();

// Import the model (todo.js) to use its database functions.
var todo = require("../models/todo.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  todo.all(function(data) {
    var hbsObject = {
      todos: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
  console.log("GET FOR TODO WAS PROCESSED")
});

//create todo model call --- has column names (name and devoured) -- sends the actual value
router.post("/api/todos", function(req, res) {
  todo.create([
    "todo_name" ,"devoured"], 
    [
      req.body.todo_name
      ,0
    ]
      ,function(result) {
      // Send back the ID of the new todo
    res.json({ id: result.insertId });
  });
  console.log("POST FOR TODO WAS PROCESSED")
});

router.put("/api/todos/:id", function(req, res) {
  var condition = "id = " + req.params.id;   ///has where "condition"

  console.log("condition", condition);
//sends the value of what to update and then create the condition on ln 27 and pass the condition on line 35. 
  todo.update(
    {
      devoured: 1
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
  console.log("PUT FOR TODO WAS PROCESSED")

});

router.delete("/api/todos/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  todo.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
    console.log("DELETE FOR TODO WAS PROCESS")
  });
});


// Import the model (user.js) to use its database functions.
var user = require("../models/user.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  user.all(function(data) {
    var hbsObject = {
      userinfo: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
  console.log("GET FOR USER WAS PROCESSED")
});

//create user model call --- has column names (username, user dob, user status) -- sends the actual value (status = 1 means inactive)
router.post("/api/userinfo", function(req, res) {
  user.create([
    "user_name","user_dob","user_status"], 
    [
      req.body.user_name
      ,req.body.user_dob
      ,0  ]
      ,function(result) {
       
      // Send back the ID of the new user
    res.json({ id: result.insertId });
  });
  console.log("POST FOR USER PROCESSED")
});

router.put("/api/userinfo/:id", function(req, res) {
  var condition = "id = " + req.params.id;   ///has where "condition"

  console.log("condition", condition);
//sends the value of what to update and then create the condition on ln 27 and pass the condition on line 35. 
  user.update(
    {
      user_status: 1
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
  console.log("PUT FOR USER WAS PROCESSED")

});

router.delete("/api/userinfo/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  user.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
    console.log("DELETE FOR USER  WAS PROCESS")
  });
});

// Export routes for server.js to use.
module.exports = router;


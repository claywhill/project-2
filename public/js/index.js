
$(document).ready(function() {
  /* global moment */

require(moment)

  // todoContainer holds all of our todos
  var todoContainer = $(".todo-container");
  var todoCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handleTodoDelete);
  $(document).on("click", "button.edit", handleTodoEdit);
  // Variable to hold our todos
  var todos;

  // The code below handles the case where we want to get blog todos for a specific author
  // Looks for a query param in the url for id
  var url = window.location.search;
  var todoId;
  if (url.indexOf("?id=") !== -1) {
    todoId = url.split("=")[1];
    GetTodos(todoId);
  }
  // If there's no todoId we just get all todos as usual
  else {
    GetTodos();
  }

  // This function grabs todos from the database and updates the view
  function GetTodos(author) {
    todoId = author || "";
    if (todoId) {
      todoId = "/?id=" + todoId;
    }
    $.get("/api/todos" + todoId, function(data) {
      console.log("Todos", data);
      todos = data;
      if (!todos || !todos.length) {
        displayEmpty(author);
      }
      else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete todos
  function deleteTodo(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/todos/" + id
    })
      .then(function() {
        GetTodos(todoCategorySelect.val());
      });
  }

  // InitializeRows handles appending all of our constructed todo HTML inside todoContainer
  function initializeRows() {
    todoContainer.empty();
    var todosToAdd = [];
    for (var i = 0; i < todos.length; i++) {
      todosToAdd.push(createNewRow(todos[i]));
    }
    todoContainer.append(todosToAdd);
  }

  // This function constructs a todo's HTML
  function createNewRow(todo) {
    var formattedDate = new Date(todo.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    var newTodoCard = $("<div>");
    newTodoCard.addClass("card");
    var newTodoCardHeading = $("<div>");
    newTodoCardHeading.addClass("card-header");
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-info");
    var newTodoTitle = $("<h2>");
    var newTodoDate = $("<small>");
    var newTodoAuthor = $("<h5>");
    newTodoAuthor.text("Written by: Author name display is in next activity when we learn joins!");
    newTodoAuthor.css({
      float: "right",
      color: "blue",
      "margin-top":
      "-10px"
    });
    var newTodoCardBody = $("<div>");
    newTodoCardBody.addClass("card-body");
    var newTodoBody = $("<p>");
    newTodoTitle.text(todo.title + " ");
    newTodoBody.text(todo.body);
    newTodoDate.text(formattedDate);
    newTodoTitle.append(newTodoDate);
    newTodoCardHeading.append(deleteBtn);
    newTodoCardHeading.append(editBtn);
    newTodoCardHeading.append(newTodoTitle);
    newTodoCardHeading.append(newTodoAuthor);
    newTodoCardBody.append(newTodoBody);
    newTodoCard.append(newTodoCardHeading);
    newTodoCard.append(newTodoCardBody);
    newTodoCard.data("todo", todo);
    return newTodoCard;
  }

  // This function figures out which todo we want to delete and then calls deleteTodo
  function handleTodoDelete() {
    var currentTodo = $(this)
      .parent()
      .parent()
      .data("todo");
    deleteTodo(currentTodo.id);
  }

  // This function figures out which Todo we want to edit and takes it to the appropriate url
  function handleTodoEdit() {
    var currentTodo = $(this)
      .parent()
      .parent()
      .data("todo");
    window.location.href = "/cms?id=" + currentTodo.id;
  }

  // This function displays a message when there are no todos
  function displayEmpty(id) {
    var query = window.location.search;
    var partial = "";
    if (id) {
      partial = " for Todo #" + id;
    }
    todoContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No todos yet" + partial + ", navigate <a href='/cms" + query +
    "'>here</a> in order to get started.");
    todoContainer.append(messageH2);
  }

});

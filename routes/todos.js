///from todos this is the models/todos file
// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function () {

  // BUILD A NEW TODO
  $(".add-todo").on("submit", function (event) {
    event.preventDefault();

    var newTodo = {
      todo_name: $("#new-todo-name").val(),
      todo_category: $("#new-todo-category").val(),
      todo_completed: $("#new-completed-status").val(),
      todo_deleted: $("#new-todo-deleted").val(),
      todo_duedate: $("#new-todo-duedate").val()
    }

    //SEND TODO POST request
    $.ajax("/api/todos/", {
      type: "POST",
      data: newTodo
    }).then(
      function () {
        console.log("created new todo");
        // Reload the page to get the updated list
        location.reload();
      });
  });

  // COMPLETE A TODO 
  $(".complete-todo").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var newComplete = $(this).data("newtodo");

    var newCompleteState = {
      todo_completed: newComplete
    };

    // Send the PUT request.
    $.ajax("/api/todos/" + id, {
      type: "PUT",
      data: newCompleteState
    }).then(
      function () {
        console.log("Completed bucket list item", newComplete);
        // Reload the page to get the updated list
        location.reload();
      });
  });

  // DELETE a TODO.
  $(".delete-todo").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");

    //SEND TODO DELETE request.
    $.ajax("/api/todos/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted todo", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});



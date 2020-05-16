///from users this is the models/users file
// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function () {

  // BUILD A NEW USER
  $(".add-user").on("submit", function (event) {
    event.preventDefault();

    var newUser = {
      user_name: $("#new-user-name").val(),
      user_dob: $("new-user-dob").val(),
      user_status: $("new-user-status").val()
    }

    // Send the POST request.
    $.ajax("/api/userinfo/", {
      type: "POST",
      data: newUser
    }).then(
      function () {
        console.log("created new user");
        // Reload the page to get the updated list
        location.reload();
      });
  });

  // update user status
  $(".update-user-status").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var newUser = $(this).data("newuser");

    var newUserState = {
      user_status: newStatus 
    };

    // Send the PUT request.
    $.ajax("/api/userinfo/" + id, {
      type: "PUT",
      data: newUserState
    }).then(
      function () {
        console.log("Inactivate User", newUser);
        // Reload the page to get the updated list
        location.reload();
      });
  });

  // DELETE a USER.
  $(".delete-user").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/userinfo/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted user", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});



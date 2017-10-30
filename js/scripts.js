//business logic:
function Task(theTask, dueDate) {
    this.toDo = theTask;
    this.dueDate = dueDate;
}

Task.prototype.allTaskInfo = function() {
  return this.toDo + ", due" + " " + this.dueDate;
}


//user interfact logic:
$(document).ready(function() {
  $("form#list").submit(function(event) {
    event.preventDefault();
    var inputtedTask = $("input#newTask").val();
    var inputtedDueDate = $("input#dueDate").val();

    var getDone = new Task(inputtedTask, inputtedDueDate);

    $("ul#taskList").append("<li><span class='taskItem'>" + getDone.allTaskInfo() + "</span></li>");

    $("ul#taskList").on("click", "li", function() {
      $(this).remove();
    });

    $("input#newTask").val("");
    $("input#dueDate").val("");

  });
});

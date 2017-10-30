//business logic:
function Task(theTask){
    this.toDo = theTask;
}

$(document).ready(function() {
  $("form#list").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#newTask").val();

    var getDone = new Task(inputtedTask);

    $("ul#taskList").append("<li><span class='taskItem'>" + getDone.toDo + "</span></li>");

    // $("ul#taskList").click()

    $("input#newTask").val("");

  });
});

function Task(toDo){
    this.toDo = toDo;
}

$(document).ready(function) {
  $("form#list").submit(function(event) {
    event.preventDefault();

    var newTask = $("input#newTask").val();

    var getDone = new Task(newTask);

    $("ul#taskList").append("<li><span class='taskItem'>" + getDone.toDo + "</span></li>");

    // $("ul#taskList").click()

    $("input#toDo").val("");

  });
});

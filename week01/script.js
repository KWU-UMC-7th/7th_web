document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const todoList = document.getElementById("todoList");
    const doneList = document.getElementById("doneList");
  
    // Add new task to To-Do List
    taskInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter" && taskInput.value.trim()) {
        const taskText = taskInput.value.trim();
        addTaskToList(taskText);
        taskInput.value = ''; // Clear input
      }
    });
  
    function addTaskToList(taskText) {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      
      const completeButton = document.createElement("button");
      completeButton.textContent = "완료";
      completeButton.addEventListener("click", () => {
        moveToDone(taskItem);
      });
      
      taskItem.appendChild(completeButton);
      todoList.appendChild(taskItem);
    }
  
    function moveToDone(taskItem) {
      taskItem.classList.add("done-item");
      taskItem.querySelector("button").remove(); // Remove Complete button
      
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "삭제";
      deleteButton.addEventListener("click", () => {
        taskItem.remove();
      });
      
      taskItem.appendChild(deleteButton);
      doneList.appendChild(taskItem);
    }
  });
  
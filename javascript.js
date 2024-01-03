// Function to add a new task
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() === '') {
      alert('Please enter a task.');
      return;
    }
  
    var task = document.createElement('li');
    task.textContent = taskInput.value;
  
    // Add a delete button to each task
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      task.parentNode.removeChild(task);
    };
  
    task.appendChild(deleteButton);
    taskList.appendChild(task);
  
    // Clear the input field after adding the task
    taskInput.value = '';
  }
  
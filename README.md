<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
  font-family: 'Arial', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

.container {
  text-align: center;
}

input[type="text"] {
  padding: 8px;
  margin-right: 8px;
}

button {
  padding: 8px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}

  </style>
  <title>To-Do List App</title>
</head>
<body>
  <div class="container">
    <h1>To-Do List</h1>
    <div>
      <input type="text" id="taskInput" placeholder="Add a new task...">
      <button onclick="addTask()">Add Task</button>
    </div>
    <ul id="taskList"></ul>
  </div>

  <script>
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

  </script>
</body>
</html>

// index.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskInput = document.getElementById('new-task-description');
  const tasksList = document.getElementById('tasks');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskDescription = taskInput.value;
    if (taskDescription) {
      addTask(taskDescription);
      form.reset();
    }
  });

  function addTask(description) {
    const taskItem = document.createElement('li');
    taskItem.textContent = description;
    tasksList.appendChild(taskItem);
  }
});

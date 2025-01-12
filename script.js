let tasks = [];


function addTask(todoIndex) {
  let taskInput = document.getElementById('task');
  let priorityInput = document.getElementById('priority');
  let dueDateInput = document.getElementById('dueDate');
  let taskText = taskInput.value.trim();
  let priority = priorityInput.value;
  let dueDate = dueDateInput.value;




  if (taskText !== '') {
    let taskList = document.getElementById('taskList');
    let newTask = document.createElement('li');

    tasks = newTask.innerHTML += `<input type="checkbox">
<label id="task">${taskText} (Priority: ${priority}, Due: ${dueDate})</label>
<button onclick="removeTask(this)">Delete</button>`;
    taskList.appendChild(newTask);
    taskInput.value = '';
    priorityInput.value = '';
    dueDateInput.value = '';


  }
}

function removeTask(button) {
  var taskItem = button.parentElement;
  taskItem.remove();
}

function deleteTodoItem(todoIndex) {
  allTodos = allTodos.filter((_, i) => i !== todoIndex);
  saveTodos();
  updateTodoList();
}
function saveTodos() {
  const todosJson = JSON.stringify(allTodos);
  localStorage.setItem("todos", todosJson);
}
function getTodos() {
  const todos = localStorage.getItem("todos") || "[]";
  return JSON.parse(todos);
}

function showTask() {
  tasks.forEach((task) => {
    const element = document.getElementById("dueDate")
    newTask.innerHTML = element.innerHTML += `<input type="checkbox">
    <label id="task">${task[0]} (Priority: ${task[1]}, Due: ${task[2]})</label>
    <button onclick="removeTask(this)">Delete</button>`
  })

  /*  if(taskText == dueDateInput.value) {
     let taskInput = document.getElementById('task');
     let priorityInput = document.getElementById('priority');
     let dueDateInput = document.getElementById('dueDate');
     let taskText = taskInput.value.trim();
     let priority = priorityInput.value;
     let dueDate = dueDateInput.value;
     const todoId = "todo-"+todoIndex;
     let taskList = document.getElementById('taskList1');
     let newTask = document.createElement('li');
 
     newTask.innerHTML = `<input type="checkbox" id="${todoId}">
 <label id="task"> (${taskText}, Priority: ${priority}, Due: ${dueDate})</label>
 <button onclick="removeTask(this)">Delete</button>`;
 taskList.appendChild(newTask);
 taskInput.value = '';
 priorityInput.value = '';
 dueDateInput.value = '';
     
 } */

}
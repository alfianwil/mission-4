let tasks = [];


function addTask(todoIndex) {
  let taskInput = document.getElementById('task');
  let priorityInput = document.getElementById('priority');
  let dueDateInput = document.getElementById('dueDate');
  let taskText = taskInput.value.trim();
  let priority = priorityInput.value;
  let dueDate = dueDateInput.value;

  tasks.push({ name: taskText, priority: priority, due: dueDate });
  let taskList = document.getElementById('taskList');
  let newTask = document.createElement('li');



  newTask.innerHTML = `
  <label id="task">${taskText} (Priority: ${priority}, Due: ${dueDate})</label>
  <button onclick="removeTask(this)">Delete</button>`;
  taskList.appendChild(newTask);
  taskInput.value = '';
  priorityInput.value = '';
  dueDateInput.value = '';


}

function markAsDone(checkbox) {
  console.log("hai", checkbox)
  if (checkbox.checked) {
    let taskItem = checkbox.parentElement;
    let doneList = document.getElementById('doneTasks');

    doneList.appendChild(taskItem);


  }
}

/* function doneTasks() {
  let checkbox = document.querySelectorAll('input[type="checkbox"]');
  tasks.forEach((task) => {
    checkbox.addEventListener('change', () => {
      if (this.checked) {
        newTask.innerHTML = `<input type="checkbox">
<label id="task">(${task.name}, Priority: ${task.priority}, Due: ${task.due})</label>
<button onclick="removeTask(this)">Delete</button>`;
        taskList.appendChild(newTask);
        taskInput.value = '';
        priorityInput.value = '';
        dueDateInput.value = '';
      }
    })
  })
}
 */
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

/* function showTask() {

  let dueDateInput = document.getElementById('dueDate1');
  let taskList = document.getElementById('taskList1');


  taskList.innerHTML = ""
  tasks.forEach((task) => {
    if (task.due == dueDateInput.value) {
      let newTask = document.createElement('li');
      let taskInput = document.getElementById('task');
      let priorityInput = document.getElementById('priority');
      let dueDateInput = document.getElementById('dueDate');

      newTask.innerHTML = `<input type="checkbox">
<label id="task">(${task.name}, Priority: ${task.priority}, Due: ${task.due})</label>
<button onclick="removeTask(this)">Delete</button>`;
      taskList.appendChild(newTask);
      taskInput.value = '';
      priorityInput.value = '';
      dueDateInput.value = '';

      newTask.innerHTML = `<input type="checkbox" onclick="markAsDone(this)">
  <label id="task">${task.name} (Priority: ${task.priority}, Due: ${task.due})</label>
  <button onclick="removeTask(this)">Delete</button>`;
      taskList.appendChild(newTask);
      taskInput.value = '';
      priorityInput.value = '';
      dueDateInput.value = '';

    }
  })

} */

function showTask() {
  let dueDateInput = document.getElementById('dueDate1');
  let taskList = document.getElementById('taskList1');

  // Clear the task list before showing the tasks only if you need a fresh display (e.g., after filtering by date)
  taskList.innerHTML = "";

  // Filter tasks based on the due date
  tasks.forEach((task) => {

    if (task.due === dueDateInput.value) {
      // Check if the task is already in the list (to avoid duplicates)
      let taskExists = Array.from(taskList.children).some(existingTask => {
        return existingTask.querySelector('label').textContent === `<label id="task">${task.name} (Priority: ${task.priority}, Due: ${task.due})</label>`;
      });


      // Only append the task if it doesn't already exist in the list
      if (!taskExists) {
        let newTask = document.createElement('li');

        newTask.innerHTML = `
            <input type="checkbox" onclick="markAsDone(this)">
            <label id="task">${task.name} (Priority: ${task.priority}, Due: ${task.due})</label>
            <button onclick="removeTask(this)">Delete</button>
          `;

        taskList.appendChild(newTask);
      }

    }
  });

  // Optionally clear input fields after displaying tasks
  document.getElementById('task').value = '';
  document.getElementById('priority').value = '';
  document.getElementById('dueDate').value = '';
}

const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}

showTime();

// Date
function updateDate() {
  let today = new Date();

  // return number
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // value -> ID of the html element
  const IDCollection = ["day", "daynum", "month", "year"];
  // return value array with number as a index
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}

updateDate();

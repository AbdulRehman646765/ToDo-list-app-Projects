const container = document.querySelector(".container");
const errorBox = document.getElementById("error");
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-text");
const saveTaskBtn = document.getElementById("save-btn");

addTaskBtn.addEventListener("click", function addTask() {
  const taskText = taskInput.value;

  if (taskText === "") {
    errorBox.style.display = "block";
    errorBox.innerText = "Please enter a task!";
    return;
  }

  errorBox.style.display = "none";

  // Create ul element
  const ul = document.createElement("ul");
  ul.textContent = taskText;

  // Task append in ul box
  taskList.appendChild(ul);

  // Clear input when add task
  taskInput.value = "";

  // Create delete button element
  const deleteBtn = document.createElement("i");
  deleteBtn.setAttribute("class", "fa-solid fa-trash");
  ul.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    ul.remove();
  });

  // Create edit button element
  const editBtn = document.createElement("i");
  editBtn.setAttribute("class", "fa-solid fa-pen-to-square");
  ul.appendChild(editBtn);

  editBtn.addEventListener("click", () => {
    editTask(ul, taskText);
  });

  function editTask() {
    taskInput.value = taskText;
    ul.remove();

    // Save button show and edit button hide
    addTaskBtn.style.display = "none";
    saveTaskBtn.style.display = "inline";

    errorBox.style.display = "none";
  }
});

function saveTask() {
  const taskText = taskInput.value;

  if (taskText === "") {
    errorBox.style.display = "block";
    errorBox.innerText = "Please enter a task!";
    return;
  }

  errorBox.style.display = "none";

  // Create ul element
  const ul = document.createElement("ul");
  ul.textContent = taskText;

  // Task append in ul box
  taskList.appendChild(ul);

  // Clear input when click save button
  taskInput.value = "";

  // Create delete button in ul box
  const deleteBtn = document.createElement("i");
  deleteBtn.setAttribute("class", "fa-solid fa-trash");
  ul.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    ul.remove();
  });

  // Create edit button in ul box
  const editBtn = document.createElement("i");
  editBtn.setAttribute("class", "fa-solid fa-pen-to-square");
  ul.appendChild(editBtn);

  editBtn.addEventListener("click", () => {
    editTask(ul, taskText);
  });

  function editTask() {
    taskInput.value = taskText;
    ul.remove();

    // Save button show and edit button hide
    addTaskBtn.style.display = "none";
    saveTaskBtn.style.display = "inline";
  }

  // Edit button show and save button hide
  addTaskBtn.style.display = "inline";
  saveTaskBtn.style.display = "none";
}

// Task run when click the enter button
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskBtn.click();
    addTaskBtn.style.display = "inline";
    saveTaskBtn.style.display = "none";
  }
});

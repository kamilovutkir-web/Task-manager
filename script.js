const taskInput = document.getElementById("taskInput");

const addButton = document.getElementById("addButton");

const taskList = document.getElementById("taskList");

let tasks = [];

addButton.addEventListener("click", function () {

    const taskText = taskInput.value;

    if (taskText === "") {

        return;

    }

    const task = {

        id: Date.now(),

        title: taskText,

        completed: false

    };

    tasks.push(task);

    const taskElement = document.createElement("div");

    taskElement.textContent = task.title;

    taskElement.addEventListener("click", function () {

        task.completed = !task.completed;

        if (task.completed) {

            taskElement.style.textDecoration = "line-through";

        } else {

            taskElement.style.textDecoration = "none";

        }

        console.log(task);

    });

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    taskElement.appendChild(deleteButton);

    deleteButton.addEventListener("click", function (event) {

        event.stopPropagation();

        taskElement.remove();

    });

    taskList.appendChild(taskElement);

    taskInput.value = "";

});
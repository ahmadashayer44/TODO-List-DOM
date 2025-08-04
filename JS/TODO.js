import { TODO_API } from "./config.js";
import { deleteTodo } from "./DeleteTODO.js";
let totalTask = document.getElementById("total-tasks");
window.totalTaskCounter = 0;

let TODOS = await fetch(TODO_API).then((res) =>
  res.json().then((data) => data.todos)
);

export function addTodo(todo) {
  let todoRow = document.createElement("tr");
  let todoID = document.createElement("td");
  let todoDescription = document.createElement("td");
  let todoUserID = document.createElement("td");
  let todoStatus = document.createElement("td");
  let todoActions = document.createElement("td");

  let button1 = document.createElement("button");
  let button2 = document.createElement("button");
  button1.innerHTML = "Delete";
  button2.innerHTML = "Done";
  button1.classList.add("delete-button");
  button2.classList.add("done-button");
  button1.addEventListener("click", () => {
    deleteTodo(todo);
  });
  todoActions.style.display = "flex";
  todoActions.style.flexDirection = "row";
  todoActions.style.justifyContent = "space-between";
  todoActions.style.gap = "15px";

  todoID.innerHTML = todo.id;
  todoDescription.innerHTML = todo.todo;
  todoUserID.innerHTML = todo.userId;
  todoStatus.innerHTML = todo.completed ? "Completed" : "Pending";

  todoActions.appendChild(button1);
  todoActions.appendChild(button2);

  todoRow.appendChild(todoID);
  todoRow.appendChild(todoDescription);
  todoRow.appendChild(todoUserID);
  todoRow.appendChild(todoStatus);
  todoRow.appendChild(todoActions);

  document.getElementById("todo-tbody").appendChild(todoRow);
  totalTaskCounter++;
  totalTask.innerHTML = totalTaskCounter;
}

TODOS.forEach(addTodo);

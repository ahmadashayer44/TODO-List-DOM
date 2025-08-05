import { TODO_API } from "./config.js";
import { addTodo } from "./TODO.js";
async function AddTodoManually(event) {
  console.log("event");
  event.preventDefault();

  let todo = {
    todo: document.getElementById("todo-text-add-input").value,
    completed: false,
    userId: 100,
  };

  let postRequest = await fetch(`${TODO_API}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  todo.id = await postRequest.json().then((data) => data.id);
  console.log(todo);
  addTodo(todo);
}

window.AddTodoManually = AddTodoManually;

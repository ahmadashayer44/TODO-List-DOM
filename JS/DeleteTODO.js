import { TODO_API } from "./config.js";
export async function deleteTodo(todo) {
  let deleteRequest = await fetch(`${TODO_API}/${todo.id}`, {
    method: "DELETE",
  });
  console.log(deleteRequest);
  if (deleteRequest.ok) {
    window.totalTaskCounter--;
    document.getElementById("total-tasks").innerHTML = window.totalTaskCounter;
    let todos = document.querySelectorAll("#todo-tbody tr td:nth-child(1)");
    for (let t of todos) {
      console.log(t);

      if (t.innerHTML == todo.id) {
        document.getElementById("todo-tbody").removeChild(t.parentElement);
      }
    }
  }
}

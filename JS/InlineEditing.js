import { TODO_API } from "./config.js";
export function InlineEditing(todo) {
  todo.contentEditable = true;
}

export async function saveTodo(todo) {
  todo.contentEditable = false;
  let updateRequest = await fetch(`${TODO_API}/${todo.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      completed: false,
    }),
  });
  console.log(updateRequest);
  let AllTodos = JSON.parse(localStorage.getItem("todos"));
  let todos = document.getElementById("todo-tbody");
  let description;
  for (let t of todos.children) {
    if (t.children[0].innerHTML == todo.id) {
      description = t.children[1].innerHTML;
    }
  }

  for (let t of AllTodos) {
    if (t.id == todo.id) {
      t.todo = description;
      localStorage.setItem("todos", JSON.stringify(AllTodos));
    }
  }
}

import { TODO_API } from "./config.js";
export async function updateTodoStatus(todoStatus, todoId) {
  todoStatus.style.transition = "all 0.7s ease-in-out";

  if (todoStatus.innerHTML === "Pending") {
    todoStatus.innerHTML = "Completed";
  }

  todoStatus.style.backgroundColor = "#4eaf53";
  todoStatus.style.color = "white";

  setTimeout(() => {
    todoStatus.style.backgroundColor = "white";
    todoStatus.style.color = "black";
  }, 700);

  let updateRequest = await fetch(`${TODO_API}/${todoId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      completed: true,
    }),
  });
  console.log(updateRequest);
}

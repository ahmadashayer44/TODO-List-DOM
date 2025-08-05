import { deleteTodo } from "./DeleteTODO.js";

export function deleteDialog(todo) {
  let overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "9999";
  overlay.style.transition = "all 0.2s ease-in-out";
  overlay.style.opacity = "0";
  overlay.style.transorm = "scale(0)";
  setTimeout(() => {
    overlay.style.opacity = "1";
    overlay.style.transorm = "scale(1)";
  }, 100);
  let dialogBox = document.createElement("div");
  dialogBox.style.backgroundColor = "white";
  dialogBox.style.padding = "2rem";
  dialogBox.style.borderRadius = "10px";
  dialogBox.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
  dialogBox.style.textAlign = "center";
  dialogBox.style.minWidth = "300px";

  let title = document.createElement("h2");
  title.innerText = "Delete Task?";

  let message = document.createElement("p");
  message.innerText = "Are you sure you want to delete this task?";

  let buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.justifyContent = "center";
  buttonContainer.style.gap = "1rem";
  buttonContainer.style.marginTop = "1.5rem";

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.style.backgroundColor = "#e74c3c";
  deleteButton.style.color = "white";
  deleteButton.style.border = "none";
  deleteButton.style.padding = "10px 20px";
  deleteButton.style.borderRadius = "5px";
  deleteButton.style.cursor = "pointer";

  deleteButton.addEventListener("click", () => {
    deleteTodo(todo);
    document.body.removeChild(overlay);
  });

  let cancelButton = document.createElement("button");
  cancelButton.innerText = "Cancel";
  cancelButton.style.padding = "10px 20px";
  cancelButton.style.border = "1px solid #ccc";
  cancelButton.style.borderRadius = "5px";
  cancelButton.style.cursor = "pointer";

  cancelButton.addEventListener("click", () => {
    document.body.removeChild(overlay);
  });

  buttonContainer.appendChild(deleteButton);
  buttonContainer.appendChild(cancelButton);

  dialogBox.appendChild(title);
  dialogBox.appendChild(message);
  dialogBox.appendChild(buttonContainer);

  overlay.appendChild(dialogBox);
  document.body.appendChild(overlay);
}

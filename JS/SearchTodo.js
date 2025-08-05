function searchTodo() {
  let tableRows = document.getElementById("todo-tbody");
  let searchTerm = document
    .getElementById("todo-search-input")
    .value.toLowerCase();
  let rows = tableRows.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName("td");
    let containsSearchTerm = false;
    for (let j = 0; j < cells.length; j++) {
      if (cells[j].innerHTML.toLowerCase().includes(searchTerm)) {
        containsSearchTerm = true;
        break;
      }
    }
    if (containsSearchTerm) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

let students = [];
let sortOrder = {};

async function fetchStudent() {
  const response = await fetch("student.json");
  students = await response.json();
  console.log("students", students);
  renderTable(students);
}

function renderTable(data) {
  const tbody = document.getElementById("studentTable");
  tbody.innerHTML = "";
  data.forEach((student) => {
    tbody.innerHTML += `
    <tr>
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.marks}</td>
    </tr>`;
  });
}

let sortDirections = {};
function sortTable(column) {
  console.log("sortDirections", sortDirections);
  sortDirections[column] = sortDirections[column] === "asc" ? "desc" : "asc";

  const direction = sortDirections[column];

  students.sort((a, b) => {
    if (a[column] > b[column]) return direction === "asc" ? 1 : -1;
    if (a[column] < b[column]) return direction === "asc" ? -1 : 1;
    return 0;
  });

  console.log(`Sorted by ${column} (${direction})`);
  renderTable(students);
}
fetchStudent();

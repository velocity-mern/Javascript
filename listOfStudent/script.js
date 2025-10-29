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

function sortTable(column) {}
fetchStudent();

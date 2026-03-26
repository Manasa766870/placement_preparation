
const data = {
  students: 120,
  tests: 15,
  avgScore: 78,
  companies: 10,
  studentList: [
    { name: "Vinay", email: "vinay@gmail.com", score: 85 },
    { name: "Rahul", email: "rahul@gmail.com", score: 72 },
    { name: "Anjali", email: "anjali@gmail.com", score: 90 }
  ]
};

document.getElementById("students").innerText = data.students;
document.getElementById("tests").innerText = data.tests;
document.getElementById("avgScore").innerText = data.avgScore + "%";
document.getElementById("companies").innerText = data.companies;

const table = document.getElementById("studentTable");

data.studentList.forEach(student => {
  const row = 
    <tr>
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.score}</td>
    </tr>
  ;
  table.innerHTML += row;
});
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Test 1', 'Test 2', 'Test 3'],
    datasets: [{
      label: 'Average Scores',
      data: [75, 80, 78]
    }]
  }
});
// ----- Dashboard Data -----
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

// Update dashboard numbers
document.getElementById("students").innerText = data.students;
document.getElementById("tests").innerText = data.tests;
document.getElementById("avgScore").innerText = data.avgScore + "%";
document.getElementById("companies").innerText = data.companies;
document.getElementById("status")

// Populate student table
const table = document.getElementById("studentTable");
data.studentList.forEach(student => {
  const row = `
    <tr>
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.score}</td>
    </tr>
  `;
  table.innerHTML += row;
});

// ----- Chart -----
const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Test 1', 'Test 2', 'Test 3'],
    datasets: [{
      label: 'Average Scores',
      data: [75, 80, 78],
      backgroundColor: ['#0d6efd','#198754','#fd7e14']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

// ----- Video Upload -----
// const form = document.getElementById("videoUploadForm");
// const uploadStatus = document.getElementById("uploadStatus");

// form.addEventListener("submit", function(e) {
//   e.preventDefault(); // prevent page reload

//   const formData = new FormData(form);

//   fetch("http://localhost:5000/api/admin/upload-video", { // corrected route
//     method: "POST",
//     body: formData
//   })
//   .then(response => {
//     if(!response.ok) throw new Error(`Server error: ${response.status}`);
//     return response.json(); // backend should return JSON { message: "Video uploaded" }
//   })
//   .then(data => {
//     uploadStatus.innerText = data.message;
//     form.reset();
//   })
//   .catch(error => {
//     console.error("Upload error:", error);
//     uploadStatus.innerText = "Upload failed!";
//   });
// });




// Upload Video
document.getElementById("videoUploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  try {
    const res = await fetch("http://localhost:5000/api/admin/upload-video", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    alert(data.message); // show success
    e.target.reset();

  } catch (err) {
    console.error(err);
    alert("Video upload failed");
  }
});

// Upload PDF
document.getElementById("pdfUploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  try {
    const res = await fetch("http://localhost:5000/api/admin/upload-pdf", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    alert(data.message);
    e.target.reset();

  } catch (err) {
    console.error(err);
    alert("PDF upload failed");
  }
});
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
// Add Question
const questionForm = document.getElementById("questionForm");

if (questionForm) {
  questionForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(questionForm);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("http://localhost:5000/api/admin/add-question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    document.getElementById("questionStatus").innerText = result.message;
    questionForm.reset();
  });
}
 // Logout
  window.logout = function () {
    localStorage.clear();
    window.location.href = "../index.html";
  };
















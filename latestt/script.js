// script.js
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Change button text
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "Light Mode";
  } else {
    toggleBtn.textContent = "Dark Mode";
  }
});


const cursor = document.querySelector('.follow-cursor');

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
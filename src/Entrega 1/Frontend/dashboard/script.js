
const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdown");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  dropdown.classList.toggle("show");
  overlay.classList.toggle("show");
  hamburger.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  dropdown.classList.remove("show");
  overlay.classList.remove("show");
  hamburger.classList.remove("active");
});

dropdown.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    dropdown.classList.remove("show");
    overlay.classList.remove("show");
    hamburger.classList.remove("active");
  });
});

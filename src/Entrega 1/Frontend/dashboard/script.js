<<<<<<< HEAD
=======

>>>>>>> 1be6aca3344aa7e93b3a85cd8537a9eaf872dd32
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

<<<<<<< HEAD
dropdown.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
=======
dropdown.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
>>>>>>> 1be6aca3344aa7e93b3a85cd8537a9eaf872dd32
    dropdown.classList.remove("show");
    overlay.classList.remove("show");
    hamburger.classList.remove("active");
  });
});

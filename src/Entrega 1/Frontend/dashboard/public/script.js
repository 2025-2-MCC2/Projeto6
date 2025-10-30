
const hamburger = document.getElementById('hamburger');
const dropdown = document.getElementById('dropdown');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  dropdown.classList.toggle('show');
  overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
  hamburger.classList.remove('active');
  dropdown.classList.remove('show');
  overlay.classList.remove('show');
});

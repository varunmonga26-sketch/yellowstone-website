// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const header = document.querySelector('header');
let darkMode = true;

themeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  if (darkMode) {
    body.classList.replace('light-mode','dark-mode');
    header.classList.replace('header-light','header-dark');
    themeToggle.textContent = '☀️ Light';
    themeToggle.classList.replace('bg-gray-800','bg-yellow-400');
    themeToggle.classList.replace('text-white','text-black');
  } else {
    body.classList.replace('dark-mode','light-mode');
    header.classList.replace('header-dark','header-light');
    themeToggle.textContent = '🌙 Dark';
    themeToggle.classList.replace('bg-yellow-400','bg-gray-800');
    themeToggle.classList.replace('text-black','text-white');
  }
});

// Scroll To Top
const scrollTop = document.getElementById('scrollTop');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > 300 && currentScrollY > lastScrollY) {
    scrollTop.classList.remove('hidden'); scrollTop.classList.add('block');
  } else {
    scrollTop.classList.remove('block'); scrollTop.classList.add('hidden');
  }
  lastScrollY = currentScrollY;
});

scrollTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Set Year
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection Observer for animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in-left','slide-in-right','fade-in');
    }
  });
},{ threshold: 0.1 });

document.querySelectorAll('section[id]').forEach(section => observer.observe(section));

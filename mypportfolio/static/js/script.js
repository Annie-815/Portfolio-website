// Active nav link highlighting
const navLinks = document.querySelectorAll('nav ul li a');
const currentUrl = window.location.href;

navLinks.forEach(link => {
  if (currentUrl.includes(link.getAttribute('href'))) {
    link.style.color = '#0ff';
  }

  link.addEventListener('mouseenter', () => {
    link.style.color = '#0ff';
  });

  link.addEventListener('mouseleave', () => {
    if (!currentUrl.includes(link.getAttribute('href'))) {
      link.style.color = '#aaa';
    }
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Typed.js
document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typing", {
    strings: [
      "Hi, I’m Ann Karanja, Python developer",
      "Data Scientist | Backend Engineer",
      "I build smart, scalable apps."
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });

  // AOS Init
  AOS.init();
});

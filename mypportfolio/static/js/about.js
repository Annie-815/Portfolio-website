document.addEventListener("DOMContentLoaded", function () {
  const aboutContent = document.querySelector('.about-content');

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        aboutContent.style.opacity = '1';
        aboutContent.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.3 }
  );

  if (aboutContent) {
    observer.observe(aboutContent);
  }

  // Typing effect
  new Typed("#typed-about", {
    strings: [
      "Back-end engineer who loves clean code.",
      "Building smart systems with Python.",
      "Always learning. Always building."
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });
});


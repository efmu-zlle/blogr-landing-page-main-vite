import '../styles/styles.css';
import '../styles/index.css';

function animation() {
  const elements = [...document.querySelectorAll('.animate')];

  const observer = new IntersectionObserver((entries, observe) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  });

  elements.forEach((el, index) => {
    setTimeout(() => {
      observer.observe(el);
    }, (index + 1) * 400);
  });
}

window.addEventListener('DOMContentLoaded', animation);

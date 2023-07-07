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

const links = [...document.querySelectorAll('#link')];

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    links.forEach((item) => {
      if (item !== link) {
        item.dataset.link = 'false';
      }
    });

    e.currentTarget.dataset.link = 'true';
  });
});

document.addEventListener('click', (e) => {
  if (typeof e.target.parentElement.dataset.link === 'string') return;
  if (typeof e.target.parentElement.parentElement.dataset.link === 'string')
    return;

  links.forEach((item) => {
    item.dataset.link = 'false';
  });
});

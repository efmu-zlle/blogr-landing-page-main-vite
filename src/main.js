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

const modals = [...document.querySelectorAll('#modal')];
const icons = [...document.querySelectorAll('#icon')];

icons.forEach((btnIcon, index) =>
  btnIcon.addEventListener('click', () => {
    modals.forEach((modal) => {
      if (modal !== modals[index]) {
        modal.dataset.link = 'false';
      }
    });

    icons.forEach((item) => {
      if (item !== btnIcon) {
        item.dataset.icon = 'false';
      }
    });

    modals[index].dataset.link = 'true';
    btnIcon.dataset.icon = 'true';
  })
);

document.addEventListener('click', (e) => {
  if (e.target.id == 'icon') return;
  if (e.target.id == 'modal') return;
  if (e.target.parentElement.id == 'modal') return;

  icons.forEach((btnIcon, index) => {
    modals[index].dataset.link = 'false';
    btnIcon.dataset.icon = 'false';
  });
});

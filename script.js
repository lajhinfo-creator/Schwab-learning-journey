
function handleReveal() {
  const sections = document.querySelectorAll('.section.reveal');
  const windowHeight = window.innerHeight;
  const offset = 120;

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < windowHeight - offset) {
      section.classList.add('visible');
    }
  });
}

function handleParallax() {
  const scrollY = window.scrollY || window.pageYOffset;

  const main = document.querySelector('.main');
  const header = document.querySelector('.header');
  const footer = document.querySelector('.footer');

  if (main) {
    main.style.transform = `translateY(${scrollY * -0.03}px)`;
  }

  if (header) {
    header.style.backgroundPositionY = `${scrollY * 0.25}px`;
  }

  if (footer) {
    const docHeight = document.body.scrollHeight;
    const winHeight = window.innerHeight;
    const footerStart = docHeight - winHeight;
    const relative = Math.max(0, scrollY - footerStart);
    footer.style.backgroundPositionY = `${relative * -0.25}px`;
  }
}

window.addEventListener('scroll', () => {
  handleReveal();
  handleParallax();
});

window.addEventListener('load', () => {
  handleReveal();
  handleParallax();
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('downloadPDF');
  if (btn) {
    btn.addEventListener('click', () => {
      window.print();
    });
  }
});

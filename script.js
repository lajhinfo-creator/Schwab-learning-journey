// === Scroll Reveal ===
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

// === Parallax for header/footer + floating main ===
function handleParallax() {
  const scrollY = window.scrollY || window.pageYOffset;

  const main = document.querySelector('.main');
  const header = document.querySelector('.header');
  const footer = document.querySelector('.footer');

  // 1. Float the main body slightly opposite the scroll
  if (main) {
    main.style.transform = `translateY(${scrollY * -0.06}px)`;
  }

  // 2. Header background parallax (moves a bit with scroll)
  if (header) {
    header.style.backgroundPositionY = `${scrollY * 0.25}px`;
  }

  // 3. Footer background parallax (moves as we approach the bottom)
  if (footer) {
    const docHeight = document.body.scrollHeight;
    const winHeight = window.innerHeight;
    const footerStart = docHeight - winHeight;

    const relative = Math.max(0, scrollY - footerStart);
    footer.style.backgroundPositionY = `${relative * -0.25}px`;
  }
}

// Attach scroll + load handlers
window.addEventListener('scroll', () => {
  handleReveal();
  handleParallax();
});

window.addEventListener('load', () => {
  handleReveal();
  handleParallax();
});

// === PDF Button – use browser print dialog ===
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('downloadPDF');
  if (btn) {
    btn.addEventListener('click', () => {
      window.print();
    });
  }
});

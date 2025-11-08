function handleReveal() {
  const sections = document.querySelectorAll('.section, .quote-box');
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < windowHeight - 150) section.classList.add('active');
  });
}
window.addEventListener('scroll', handleReveal);
window.addEventListener('load', handleReveal);

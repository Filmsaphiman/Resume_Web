// Add animation when scrolling
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + window.innerHeight;

  sections.forEach(section => {
    if (scrollPosition > section.offsetTop + 100) {
      section.classList.add('animate');
    }
  });
});

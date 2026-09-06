const menuToggle = document.getElementById('menu-toggle');
const siteLinks = document.getElementById('site-links');

if (menuToggle && siteLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
